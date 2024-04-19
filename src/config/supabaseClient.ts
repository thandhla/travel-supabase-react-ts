import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://epqxcehzumukrqavkeji.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwcXhjZWh6dW11a3JxYXZrZWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNzI0OTAsImV4cCI6MjAyODc0ODQ5MH0.mguIppqkjTNIJpQarNJkBFi9R410bSNtsUv9QWXkDXU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

