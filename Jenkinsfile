node {
    env.NODEJS_HOME = "${tool 'node9'}"
    def currentFolder = pwd()
    env.PATH="${currentFolder}/node_modules/.bin:${env.NODEJS_HOME}/bin:${env.PATH}"
    stage('init') {
      sh 'echo $PATH'
	  sh 'npm -v'
    }
    stage('install-dependencies') {
	  sh 'npm-cache install'
    }
    stage('build') {
      sh 'ng build'
    }
}
