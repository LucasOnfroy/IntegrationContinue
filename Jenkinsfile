pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        slackSend(message: 'Build Started', teamDomain: 'epsiic', token: 'WnmTcMh1t5Te1FUmga2UWjyc', channel: 'onfroy_leraisnié_dev1')
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
        slackSend(message: 'Success !', token: 'WnmTcMh1t5Te1FUmga2UWjyc', teamDomain: 'epsiic', channel: 'onfroy_leraisnié_dev1')
      }
    }
  }
}