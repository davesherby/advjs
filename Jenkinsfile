pipeline {
    agent any
      tools {nodejs "node9"}
environment {
        NPM_CONFIG_PREFIX = 'TUTU'
        DB_ENGINE    = 'sqlite'
    }
      stages {
          stage("foo") {
              steps {
                  echo "coucou ${NPM_CONFIG_PREFIX}"
    		  echo "npm -v"
		  sh 'npm -v'
		  sh 'echo NPNP ${NPM_CONFIG_PREFIX}'
		  echo "au revoir"
              }
          }
      }
}
