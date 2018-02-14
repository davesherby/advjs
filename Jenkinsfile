node {
  checkout scm
  docker.image('trion/ng-cli-e2e').inside {
	  stage('dependencies') {
      sh 'npm install'
	  }
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
    sh 'echo generation des tests'
    junit 'coverage/test-report.xml'
  }
  /*
    stage('Sonar') {
      def scannerHome = tool 'SonarQube3'
      withSonarQubeEnv('SonarQube') {
        sh "${scannerHome}/bin/sonar-scanner"
      }
    }
    */
}
