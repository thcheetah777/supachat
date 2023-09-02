import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://nhcxttqwtbtpbyzvnnps.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oY3h0dHF3dGJ0cGJ5enZubnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2Mzk2NzYsImV4cCI6MjAwOTIxNTY3Nn0.CTG-QNsSCRSfhVj-ue6EEtQ7Ca7GcXfYr8eKOhO0U2E";

export const supabase = createClient(projectUrl, anonKey);
