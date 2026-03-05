pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "https://github.com/poVvisal/FoodExpress.git"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t foodexpress- .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop foodexpress- || true'
                sh 'docker rm foodexpress- || true'
                sh 'docker run -d --name foodexpress- -p 3000:3000 foodexpress-'
            }
        }
    }
}
