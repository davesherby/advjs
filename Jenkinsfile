node {
     env.NODEJS_HOME = "${tool 'node9'}"
     def currentFolder = pwd()
     env.PATH="${currentFolder}/node_modules/.bin:${env.NODEJS_HOME}/bin:${env.PATH}"
                stage('init-checkout') {
     checkout scm
     sh 'npm-cache install'
     sh 'ls -al'
    }
    docker.image('trion/ng-cli-e2e').inside {
          stage('Unit Test') {
          try {
          sh 'ng test --browser ChromeHeadless --code-coverage=true --single-run=true'
          }
          catch (err) {
            sh 'echo erreur lors de l execution des tests'
          }
        }
    }
    stage('junitReport') {
    junit 'coverage/test-report.xml'
    }
    stage('Sonar') {
      def scannerHome = tool 'SonarQube3'
      withSonarQubeEnv('SonarQube') {
        sh "${scannerHome}/bin/sonar-scanner"
      }
    }
}
