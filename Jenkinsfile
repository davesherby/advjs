node {
  checkout scm
  docker.image('trion/ng-cli-e2e').inside {
	  stage('dependencies') {
      sh 'stage dependencies'
      sh 'npm install'
	  }
    stage('Unit Test') {
      try {
        sh 'stage Unit Test'
        sh 'ng test --browser ChromeHeadless --code-coverage=true --single-run=true'
      }
      catch (err) {
        sh 'echo erreur lors de l execution des tests'
      }
    }
  }
  stage('junitReport') {
    sh 'stage junitReport'
    junit 'coverage/test-report.xml'
  }
  stage('Sonar') {
    def scannerHome = tool 'SonarQubeScanner3'
    withSonarQubeEnv('sonarqubeserver') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}
