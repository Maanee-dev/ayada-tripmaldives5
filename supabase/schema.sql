-- 
-- DATABASE BLUEPRINT
-- 

-- 1. Profiles Table (Referral Partners)
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT UNIQUE,
  company_name TEXT,
  commission_rate NUMERIC DEFAULT 10,
  total_earnings NUMERIC DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Referral Inquiries Table (Leads)
CREATE TABLE referral_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  partner_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  resort_name TEXT,
  status TEXT DEFAULT 'Inquired' CHECK (status IN ('Inquired', 'Contacted', 'Booked', 'Cancelled')),
  deal_value NUMERIC DEFAULT 0,
  commission_earned NUMERIC DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Payouts Table
CREATE TABLE payouts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  partner_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  amount NUMERIC NOT NULL,
  status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Paid', 'Failed')),
  payout_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_referral_inquiries_updated_at BEFORE UPDATE ON referral_inquiries FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- 
-- SECURITY & RLS
-- 

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE payouts ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Users can view their own profile" ON profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = user_id);

-- Referral Inquiries Policies
CREATE POLICY "Partners can view their own inquiries" ON referral_inquiries FOR SELECT USING (partner_id IN (SELECT id FROM profiles WHERE user_id = auth.uid()));
CREATE POLICY "Public can create inquiries" ON referral_inquiries FOR INSERT WITH CHECK (true);

-- Payouts Policies
CREATE POLICY "Partners can view their own payouts" ON payouts FOR SELECT USING (partner_id IN (SELECT id FROM profiles WHERE user_id = auth.uid()));
