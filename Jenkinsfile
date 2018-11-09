pipeline{
    agent any 
    stages{
        stage('Build'){
            steps{

                sh 'npm pack'
                script {
                    
                    def server = Artifactory.newServer 'http://142.93.254.193:8081/artifactory', 'admin', 'password'

                    def uploadSpec = """ 

                        {
                            "files" : [
                                {
                                    "pattern" : "*.tgz", 
                                    "target" : "npm-local/gateway-api/"
                                }
                            ]
                        }
                    
                    """

                    def buildInfo = server.upload(uploadSpec)

                    server.publishBuildInfo(buildInfo); 

                    def promotionConfig = [

                        'buildName' : buildInfo.name, 
                        'buildNumber' : buildInfo.number, 
                        'targetRepo' : 'npm-local-release', 
                        'status' : 'Released',  
                    ]

                    Artifactory.addInteractivePromotion server: server, promotionConfig: promotionConfig, displayName: "Promover componente"

                }
            }
        }
    }
}