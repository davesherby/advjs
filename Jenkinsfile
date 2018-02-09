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
    stage('post') {
    sh 'Attention : HTML'
    publishHTML (target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: 'coverage',
            reportFiles: 'index2.html',
            reportName: "Coverage Report"
          ])
    junit 'coverage/test-report.xml'
    }
}
