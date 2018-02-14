node {
  checkout scm
  docker.image('trion/ng-cli-e2e').inside('--network ci-net') {
	  stage('dependencies') {
      sh 'echo STAGE dependencies'
      sh 'npm install'
	  }
    stage('Unit Test') {
      try {
        sh 'echo STAGE Unit Test'
        sh 'ng test --browser ChromeHeadless --code-coverage=true --single-run=true'
      }
      catch (err) {
        sh 'echo erreur lors de l execution des tests'
      }
    }
    stage('junitReport') {
      sh 'echo STAGE junitReport'
      junit 'coverage/test-report.xml'
    }
    stage('Sonar') {
      sh 'echo STAGE sonar'
      def scannerHome = tool 'SonarQubeScanner3'
      withSonarQubeEnv('sonarqubeserver') {
        sh "${scannerHome}/bin/sonar-scanner"
      }
    }    
  }
}
