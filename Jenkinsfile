pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/poVvisal/FoodExpress.git'
            }
        }

        stage('CI Pipeline') {
            when {
                not {
                    anyOf {
                        changeset "README.md"
                        changeset "*.md"
                        changeset "docs/**"
                    }
                }
            }
            stages {
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
                        sh 'docker build -t foodexpress-js .'
                    }
                }

                stage('Deploy') {
                    steps {
                        sh 'docker stop foodexpress-js || true'
                        sh 'docker rm foodexpress-js || true'
                        sh 'docker run -d --name foodexpress-js -p 3000:3000 foodexpress-js'
                    }
                }
            }
        }
    }
}
