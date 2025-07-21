export const posts = [
	{
    link: 'https://medium.com/@makayla.b.ferrell/bypass-restrictions-in-api-gateway-acrtp-783a2f3b7400',
    src: 'img/apiG.png',
    alt: 'ACRTP',
    title: 'Bypass Restrictions in API Gateway',
    desc: 'Using AWS API Gateway misconfigurations to gain unauthorized access to production environments.',
    type: 'AWS'
  },
  {
    link: 'https://medium.com/@makayla.b.ferrell/ssrf-to-pwned-acrtp-103a79ac28c7',
    src: 'img/ssrf.jpeg',
    alt: 'ACRTP',
    title: 'SSRF to Pwned',
    desc: 'Exploiting a Server-Side Request Forgery (SSRF) vulnerability to extract sensitive files from an S3 bucket.',
    type: 'AWS'
  },
   {
      link: 'https://medium.com/@makayla.b.ferrell/looting-public-ebs-snapshots-acrtp-ec1732d5cf89',
      src: 'img/aws.jpg',
      alt: 'ACRTP',
      title: 'Looting Public EBS Snapshots',
      desc: 'Enumerating EBS snapshots and exfiltrating data.',
      type: 'AWS'
    },
  {
    link: 'https://medium.com/@makayla.b.ferrell/escalate-privileges-by-iam-policy-rollback-acrtp-387871fe2dc3',
    src: 'img/aws.jpg',
    alt: 'ACRTP',
    title: 'Escalate Privileges by IAM Policy Rollback',
    desc: 'Exploiting IAM policy version control and password cracking zip files',
    type: 'AWS'
  },
  {
    link: 'https://medium.com/@makayla.b.ferrell/assume-privileged-role-with-external-id-acrtp-d694b351e9eb',
    src: 'img/privleged-role.png',
    alt: 'ACRTP',
    title: 'Assume Privileged Role with External ID',
    desc: 'Using IAM policy and aws-enumerator to escalate privileges within an AWS environment.',
    type: 'AWS'
  },
    {
      link: 'https://medium.com/@makayla.b.ferrell/acrtp-hunting-for-secrets-in-git-repos-b31d8e635d07',
      src: 'img/aws5.jpg',
      alt: 'ACRTP',
      title: 'Hunting for Secrets in Git Repos',
      desc: 'Discovering secrets hidden in a Git repository and using them to access an AWS S3 bucket.',
      type: 'AWS'
    },
  {
      link: 'https://medium.com/@makayla.b.ferrell/s3-enumeration-basics-acrtp-6e1df9ecbb07',
      src: 'img/awss3.jpg',
      alt: 'ACRTP',
      title: 'S3 Enumeration Basics',
      desc: 'This is a walkthrough of the S3 Enumeration Basics lab from PwnedLabs.',
      type: 'AWS'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/intro-to-aws-iam-enumeration-acrtp-c0e140ebc9d8',
      src: 'img/aws2.jpg',
      alt: 'ACRTP',
      title: 'Intro to AWS IAM Enumeration',
      desc: 'This is a walkthrough of the Intro to AWS IAM Enumeration lab from PwnedLabs.',
      type: 'AWS'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/identifying-the-aws-account-id-from-a-public-s3-bucket-acrtp-0f93e538e731',
      src: 'img/aws3.jpg',
      alt: 'ACRTP',
      title: 'Identifying the AWS Account ID from a Public S3 Bucket',
      desc: 'Understanding the s3-account-search tool.',
      type: 'AWS'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-w1seguy-726d45081a4c',
      src: 'img/gandalf.png',
      alt: 'Gandalf',
      title: 'Prompt Hacking Gandalf AI',
      desc: 'Use prompt injection to bypass Gandalf AI.',
      type: 'AI'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-w1seguy-726d45081a4c',
      src: 'img/xor2.png',
      alt: 'W1seGuy',
      title: 'TryHackMe W1seGuy',
      desc: 'This room is a CTF style cryptography challenge that focuses on the XOR operator.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-traverse-f9959c945738',
      src: '/img/api.png',
      alt: 'Traverse',
      title: 'Tryhackme Traverse',
      desc: 'This room is a CTF style application security challenge that includes API hacking, python scripting, and command injection.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-uranium-ba67a0697a21',
      src: '/img/uranium.png',
      alt: 'Uranium',
      title: 'Tryhackme Uranium CTF',
      desc: 'This room includes OSINT, phishing, wireshark forensics, and SUIDs.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-brooklyn-nine-nine-3765baeb3f73',
      src: '/img/b99.jpg',
      alt: 'Brooklyn Nine Nine',
      title: 'Tryhackme Brooklyn Nine Nine',
      desc: 'This is a beginner room that includes anonymous ftp login, steganography, and linux privilege escalation.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-attacktive-directory-8a4eeee05ea4',
      src: '/img/ad.jpg',
      alt: 'TraAttacktive Directoryverse',
      title: 'Tryhackme Attacktive Directory',
      desc: 'This room covers exploiting an active directory domain controller.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-looking-glass-767626f60858',
      src: '/img/alice.jpg',
      alt: 'Looking Glass',
      title: 'Tryhackme Looking Glass',
      desc: 'This room covers cryptography, linux enumeration, lateral and vertical privilege escalation.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-nerdherd-room-b6a8ec0bab05',
      src: '/img/nerdherd.png',
      alt: 'NerdHerd',
      title: 'Tryhackme NerdHerd',
      desc: 'This room is a ctf style challenge that covers ftp anonymous login, smb enumeration, vigenere ciphers, and a linux kernel privilege escalation.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-git-happens-823dfe87cf0b',
      src: '/img/git.png',
      alt: 'Git Happens',
      title: 'Tryhackme Git Happens',
      desc: 'This room covers enumerating a public git repository.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-kenobi-room-46965d0d4501',
      src: '/img/kenobi.png',
      alt: 'Kenobi',
      title: 'Tryhackme Kenobi',
      desc: 'This room covers samba enumeration, ftp exploitation, and linux privilege escalation.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-wonderland-dafcc5a3efc',
      src: '/img/wonder.png',
      alt: 'Wonderland',
      title: 'Tryhackme Wonderland',
      desc: 'This room covers python library hijacking, linux enumeration, and privilege escalation.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-inclusion-room-d84cabfedf14',
      src: 'img/inclus.png',
      alt: 'Inclusion',
      title: 'Tryhackme Inclusion',
      desc: 'This room is for practice with Local File Inclusion (LFI) attacks.',
      type: 'TryHackMe'
    },
    {
      link: 'https://medium.com/@makayla.b.ferrell/tryhackme-easy-peasy-writeup-e688da86044b',
      src: 'img/easyp.png',
      alt: 'Easy Peasy',
      title: 'Tryhackme Easy Peasy',
      desc: 'This room is for practice locating a hidden directory to get initial access to a vulnerable machine, and escalating privileges using a crontab.',
      type: 'TryHackMe'
    }
]
