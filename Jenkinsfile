pipeline {
    agent any
    tools {nodejs "NodeJs"}
    stages {
        stage('Checkout') {
            steps {
                
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install dependencies on application
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                // Build and deploy 
                sh 'npm test'     
            }
        }
        
        stage('Update Landing Page') {
            steps {
                // Make changes to the landing page (add "MILESTONE 2")
                sh 'echo "<h1>MILESTONE 2</h1>" >> index.html' 
                sh 'git add index.html'
                sh 'git commit -m "Add MILESTONE 2"'
                sh 'git push origin master' // Push the changes to your repository
            }
        }
    }
    
    post {
        success {
            //failed
            echo 'Pipeline Succeeded!  Deployed to Render.'
        }
        failure {
            echo 'Pipeline Failed! Deployment to Render Unsuccesful'
        }
    }
}
