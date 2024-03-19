import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wecyauohmceefsetkiai.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlY3lhdW9obWNlZWZzZXRraWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTk0NDcsImV4cCI6MjAyNjM3NTQ0N30._w3oj0etMK_-krzGugfwIG7IuaQcziBYopWv1gZMXf8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
