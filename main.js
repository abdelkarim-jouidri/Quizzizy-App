let Questions = [
    {
        question:"Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
        A:"Amazon EC2 costs are billed on a monthly basis.",
        B:"Users retain full administrative access to their Amazon EC2 instances.",
        C:"Amzon EC2 instances can be launched on demand when needed.",
        D:"Users can permanently run enough instances to handle peak workloads.",
        Answer : "C",
        Explanation : "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to the varying workload. This is a more economical practice than purchasing enough on-premise servers to handle the peak load."
    },
    {
        question:"Which AWS service would simplify the migration of a database to AWS?",
        A:"AWS Storage Gateway.",
        B:"AWS Database Migration Service(AWS DMS).",
        C:"Amazon EC2.",
        D:"Amazon AppStream.",
        Answer : "B",
        Explanation : "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases."
    },
    {
        question:"Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
        A:"AWS Config.",
        B:"AWS OpsWorks.",
        C:"AWS SDK.",
        D:"AWS Marketplace.",
        Answer : "D",
        Explanation : "AWS Marketplace is a digital catalog with thousands of software listings from independant software vendors that makes it easy to find, test, buy and deploy software that runs on AWS."
    },
    {
        question:"Which AWS networking service enables a company to create a virtual network whithin AWS?",
        A:"AWS Config.",
        B:"Amazon Route 53.",
        C:"AWS Direct Connect.",
        D:"Amazon virtual Private Cloud (VPC).",
        Answer : "D",
        Explanation : "Amazon VPC lets users provision a logically isolated section of the AWS cloud where users can launch AWS resources in a virtual network that they define."
    },
    {
        question:"Which of the following is an AWS responsibilty under the AWS shared responsibility model?",
        A:"Configuring third-party applications.",
        B:"Maintaining physical hardware.",
        C:"Securing application access and data.",
        D:"Managing guest operating systems.",
        Answer : "B",
        Explanation : "Maintaining physical hardware is an AWS responsabilty user the AWS shared responsibility under the AWS shared responsibility model."
    },
    {
        question:"Which component of the AWS global infrastructure does Amazon CloudFont use to ensure low-latency delivery?",
        A:"AWS Regions.",
        B:"Edge locations.",
        C:"Availability Zones.",
        D:"Virtual Private Cloud (VPC).",
        Answer : "B",
        Explanation : "To deliver content to users with lower latency. Amazon CloudFont uses a global network of points of presence (edge locations and regional edge caches) worldwide."
    },
    {
        question:"How would a system administrator add an additional layer of login security to user's AWS Management Console?",
        A:"Use Amazon Cloud Directory.",
        B:"Audit AWS Identity and Access Management (IAM) roles.",
        C:"Enable multi-factor authentication.",
        D:"Enable AWS CloudTrail.",
        Answer : "C",
        Explanation : "Multi-Factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor -- what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources."
    },
    {
        question:"Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
        A:"AWS Trusted Advisor.",
        B:"AWS CloudTrail.",
        C:"AWS X-Ray.",
        D:"AWS Identify and Acess Management (AWS IAM).",
        Answer : "B",
        Explanation : "AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs."
    },
    {
        question:"Which service would be used to send alerts based on Amazon CloudWatch alarms?",
        A:"Amazon Simple Notification Service (Amazon SNS).",
        B:"AWS CloudTrail.",
        C:"AWS Trusted Advisor.",
        D:"Amazon Route 53.",
        Answer : "A",
        Explanation : "Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries."
    },
    {
        question:"Where can a user find information about prohibited actions on the AWS infrastructure?",
        A:"AWS Trusted Advisor.",
        B:"AWS Identity and Access Management (IAM).",
        C:"AWS Billing Console.",
        D:"AWS Acceptable Use Policy.",
        Answer : "D",
        Explanation : "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure."
    }
]