# StudentProject
This is a simple template project for GCP, which:
  - Uses a **Cloud Function** written in python to fetch data stored in a **BigQuery table**
  - Displays the fetched data in a frontend hosted as a **Docker** container in **Cloud Run**
  - Automatically sends information about new commits to **Cloud Build**, which deploys the code

To recreate this project, you can create a **fork** of this repository in your Github account.
Below are outlined the steps you will need to do in Google Cloud console.

## Initial GCP setup
After creating a new GCP project and creating a fork of this repository, there is a few steps we need to do in GCP:
  - Create a new Artifact Repository
  - Create connection to Github in Cloud Build
  - Create Cloud Build triggers for the frontend and api
  - Create a dummy table in BigQuery matching the one in the project's API

When creating the GCP resources, it is possible you will need to 'activate' some of them first!

### Creating an Artifact Repository
This is where the compiled frontend and api artifacts will go, and is necessary for their deployment. 
Make sure to create one with the name 'api' and one with the name 'frontend' (As these are referenced in the yaml files needed to build the application).
1. Search for 'Artifact Registry'
2. Click on 'Create Repository'
3. Fill out the name
4. Set region to 'europe-west3 (Frankfurt)'
5. Keep all other settings and click 'Create'

### Connecting to Github
This is necessary for automatic triggering of builds upon commit detection:
1. Go to 'Cloud Build -> Repositories -> 1st gen'
2. Click on 'Connect Repository'
3. Select 'GitHub (Cloud Build GitHub App)' and click 'Continue'
4. Authenticate Cloud Build to access your Github account
5. Select the Github Repository with the project and click 'Connect'

### Creating a Cloud Build Trigger
We will be creating two triggers, called 'deploy-api' and 'deploy-frontend'
1. Go to 'Cloud Build -> Triggers -> Create Trigger'
2. Set the name
3. Configure the repository and branch regex (make sure Repository generation is 1st gen)
4. Set cloudbuild configuration file location to match the cloudbuild files in this repository
5. Make sure to enable 'Require approval before build executes'
6. Optionally check 'Send build logs to Github'
7. Click 'Save'

### Creating a BigQuery table
1. Go to BigQuery
2. Click on 'Create new -> Table'
3. Click 'Dataset - Create new Dataset'
4. Set the name 'my_test_dataset' and click 'Create dataset'
5. Select the newly created dataset as the dataset for this table
6. Set the table name as 'my_test_table'
7. Set the table fields under 'Schema' as follows:
| Field Name | Type    | Mode     |
| ---------- | ------- | -------- |
| ID         | STRING  | NULLABLE |
| Name       | STRING  | NULLABLE |
| BirthDate  | DATETIME| NULLABLE |
| Country    | STRING  | NULLABLE |
8. Click on 'Create table'
