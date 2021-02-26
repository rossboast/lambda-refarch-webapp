// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6h0ocamb5pbpio4v2jhema9573",     // CognitoClientID
  "api_base_url": "https://4w31q3x022.execute-api.eu-west-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2pqjl58nxuean.amplifyapp.com"                                      // AmplifyURL
};

export default config;
