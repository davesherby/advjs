node {
    env.NODEJS_HOME = "${tool 'node9'}"
    def currentFolder = pwd()
    env.PATH="${currentFolder}/node_modules/.bin:${env.NODEJS_HOME}/bin:${env.PATH}"
    stage('init') {
      sh 'echo $PATH'
	  sh 'npm -v'
    sh 'echo AVANT1'
    sh 'ls -al'
    sh 'echo APRES1'
    }
    stage('install-dependencies') {
    sh 'echo AVANT2'
    sh 'ls -al'
	  sh 'npm-cache install'
    sh 'echo APRES2'
    }
      docker.image('trion/ng-cli-e2e').inside {
          stage('Unit Test') {
          sh 'echo AVANT3'
          sh 'ls -al'
          sh 'echo APRES3'
            sh 'ng test --browser ChromeHeadless --code-coverage=true --single-run=true'
            /*publishHTML (target: [
                  allowMissing: false,
                  alwaysLinkToLastBuild: false,
                  keepAll: true,
                  reportDir: 'coverage',
                  reportFiles: 'index.html',
                  reportName: "Coverage Report"
                ])*/
            sh 'ls -al coverage'
            junit 'coverage/test-report.xml'
          }
        }
}
