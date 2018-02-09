node {
    stage('init-checkout') {
     checkout scm
     sh 'ls -al'
    }
      docker.image('trion/ng-cli-e2e').inside {
          stage('install-dependencies') {
     	      sh 'npm-cache install'
          }
          stage('Unit Test') {
          sh 'echo disabling shell exit on error'
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
