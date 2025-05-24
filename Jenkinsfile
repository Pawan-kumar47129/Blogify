pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-dockerhub-username/docker-project'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Pawan-kumar47129/docker-project.git', branch: 'main'
            }
        }

        stage('Build Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push("latest")
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Windows-style commands using 'bat'
                    bat 'docker stop docker-project || exit 0'
                    bat 'docker rm docker-project || exit 0'
                    bat "docker run -d --name docker-project -p 8080:80 %DOCKER_IMAGE%:%BUILD_NUMBER%"
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
