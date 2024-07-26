// For supabase key and other environment variables
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Supabase config
const supabaseUrl = 'https://rclumlmyqtxgmthpqsrj.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


module.exports = supabase;