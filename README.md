<center><img src="https://files.readme.io/7d79f02-Untitled_design_8.png" ></center>

# SocioPhin

Create a powerful social network for your organization and attract the right users leveraging technology at its best.

With over 3 billion active users, social media is a platform where consumers spend time every day conversing to one another about their likes, dislikes, and interests. Every business, from SMEs to large corporations, needs a social media plan to broaden their reach, raise brand awareness, attract new consumers, and engage existing customers with valuable content.

# What it does

SocioPhin integrates social media platforms with customer relationship management (CRM) systems to provide insight into customer interactions with a brand, and to improve the quality of customer engagement To create powerful social network management for organizations to attract the right users leveraging technology at its best. As a result of our integration with Facebook and LinkedIn, we can provide our users with many benefits, including Direct Messages across social networks, and users are able to post and view their posts, not to mention view and reply to their comments.


# How we built it

**Front end:** For the UI part we have used Bootstrap, HTML and CSS which is then converted into react components. **Facebook graph APIs:** We have used the Facebook developer graph tool for getting the endpoints for messenger and posts.
**Front end **- backend integration: We have used Axios which is an NPM package for calling APIs and after that, we have used a few state management hooks provided by react.js i.e useState, useEffect and a very popular package Recoil for storing global states. Login: For the login part I used Facebook SDK. In the login method I set all the required permissions for the access_key and then storing the pageid and access_key in a recoil global state. **Messenger**: Messenger part was simple for integration, made the state management with props and react hooks. The API endpoints i.e the access_key and pageid were fetched from the global state. Posts: For the posts, the state management is the same as the messenger one. The only tricky part was the mapping of comments and replies but I managed to do that using nested maps which worked well.
**Backend**: For backend we have used AWS RDS mySQL database and Node js to create APIs for different operations and S3 bucket to store the files. We also created a scheduling operation with Cron Node.js which triggers every second to check for queries matching the timestamp and sends the email to all the user if matches. We developed a backend with node.js and twitter v2 apis to get all the required apis for twitter endpoints. 
**Deployment**: We created a serverless architecture with AWS lambda, AWS API gateway and AWS S3 bucket. Demo Site: [SocioPhin](https://main.d3n22laf955pa1.amplifyapp.com/)


# 📝 Installing Guides

## Serverless Framework Node Express API on AWS

This template demonstrates how to develop and deploy a simple Node Express API service running on AWS Lambda using the traditional Serverless Framework.

## Anatomy of the template

This template configures a single function, `api`, which is responsible for handling all incoming requests thanks to configured `http` events. To learn more about `http` event configuration options, please refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/). As the events are configured in a way to accept all incoming requests, `express` framework is responsible for routing and handling requests internally. Implementation takes advantage of `serverless-http` package, which allows you to wrap existing `express` applications. To learn more about `serverless-http`, please refer to corresponding [GitHub repository](https://github.com/dougmoscrop/serverless-http).

## Usage

### Deployment

This example is made to work with the Serverless Framework dashboard, which includes advanced features such as CI/CD, monitoring, metrics, etc.

In order to deploy with dashboard, you need to first login with:

```
serverless login
```

install dependencies with:

```
npm install
```

and then perform deployment with:

```
serverless deploy
```

After running deploy, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-express-api.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: aws-node-express-api
stage: dev
region: us-east-1
stack: aws-node-express-api-dev
resources: 12
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/{proxy+}
functions:
  api: aws-node-express-api-dev-api
layers:
  None
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/
```

Which should result in the following response:

```
{"message":"Hello from root!"}
```

Calling the `/hello` path with:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/hello
```

Should result in the following response:

```bash
{"message":"Hello from path!"}
```

If you try to invoke a path or method that does not have a configured handler, e.g. with:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/nonexistent
```

You should receive the following response:

```bash
{"error":"Not Found"}
```

### Local development

It is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
# 🚦 API Docs

## Facebbok Graph APIs
The Graph API is the primary way for apps to read and write to the Facebook social graph. All of our SDKs and products interact with the Graph API in some way, and our other APIs are extensions of the Graph API, so understanding how the Graph API works is crucial. 
**[The latest version is:v12.0](https://developers.facebook.com/docs/graph-api/)**
## Twitter APIs:
Use the Twitter API to listen to and analyze the public conversation, engage with people on Twitter, and innovate. Here you can see how the recent search endpoint was used to find Tweets with specific keywords.
**[Twitter API V2.2
](https://developer.twitter.com/en/docs)**


# 💬 Contact Us
Link: https://main.d3n22laf955pa1.amplifyapp.com/ <br>
Backend Repo: https://github.com/anishdutta/SocialCRM_Node_BE <br>
Frontend Repo: https://github.com/ad-saxena/sociophin_Fe <br>
