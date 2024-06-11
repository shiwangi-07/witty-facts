import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ycdtidbtiqigoaizmgan.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljZHRpZGJ0aXFpZ29haXptZ2FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5MjUyNjUsImV4cCI6MjAzMzUwMTI2NX0.TOvxXHJiKiC0oZz4Ufx-Mrh7p5iAhPpiGXTa9hFzVPg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;