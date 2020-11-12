node {
    stage('Using Worktile Pipeline') {
        script {
            def vars = checkout scm
            if (env.RUN_CI == "true" ) {
                try {
                   sh "sleep 2"
                }catch(e) {
                    echo "some error happen, add timestamp"
                }
                finally {
                    worktileBuildRecord(
                        failOnError: true,
                        overviewPattern: "^hello"
                    )
                }
            }
            else if(env.TAG_TRIGGER == "true") {
                 worktileDeployRecord(
                    environmentName: "development",
                    releaseName: "release-${env.GIT_TAG}",
                    releaseURL: "[https://at.worktile.com",]
                    isTagged: true
                )
            }
            else {
                sh "printenv"
                worktileDeployRecord(
                    environmentName: "development",
                    releaseName: "releaseName",
                    releaseURL: "[https://at.worktile.com"]
                )
            }
        }
    }
}
