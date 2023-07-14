This is a project to provide the students of the La Mesa String School with a solution for scheduling and attendance, payment history & verification, practice and progress tracking, and access to other student resources like my instructional book and sheet music library. As the project progresses, this readme will be updated with more info.

-Current state:
  Supabase Auth features are now integrated. Users can choose an open spot on the schedule and sign up as a student or as a parent/guardian on a student's behalf. Sign up requires email confirmation, handled by supabase, and upon completion the user is brought to the user's Home screen. 

- Still needs/upcoming chores:
  OAuth 2.0 via Google, Apple, Microsoft
  Google Calendar API to allow booking
  MS Outlook API to track student payments
  Build out student view with the above features

  Add manual user support to facilitate CRUD operations on various student data like practice time, progress, songs complete, theory learned and mastery level 1-3,     etc
