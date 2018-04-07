pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        slackSend(message: 'Build Started', teamDomain: 'epsiic', token: 'WnmTcMh1t5Te1FUmga2UWjyc', channel: 'onfroy_leraisnié_dev1', color: '#FFFF00')
      }
    }
    stage('build') {
      steps {
        sh '''npm install
node server.test.js'''
      }
    }
    stage('finish') {
      steps {
        slackSend(message: 'Success !', token: 'WnmTcMh1t5Te1FUmga2UWjyc', teamDomain: 'epsiic', channel: 'onfroy_leraisnié_dev1', color: '#00FF00')
      }
    }
  }
  post {
   always {
     echo currentBuild.result
     slackSend(color: '#00FF00', token: 'WnmTcMh1t5Te1FUmga2UWjyc', teamDomain: 'epsiic', channel: 'onfroy_leraisnié_dev1', message: "${currentBuild.result}")
     
   } 
 }
}
