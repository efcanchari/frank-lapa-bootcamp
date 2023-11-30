## Multiple Git accounts

### How to configure multiple bitbucket accounts
Official doc:
https://support.atlassian.com/bitbucket-cloud/docs/managing-multiple-bitbucket-user-ssh-keys-on-one-device/

Go to ~/.ssh
```
cd ~/.ssh
```

There create your ssh following next example
```
ssh-keygen -t ed25519 -b 4096 -C "<username@emaildomain.com>" -f <ssh-key-name>


# example 
ssh-keygen -t ed25519 -b 4096 -C "frank.lapa@symovetech.com" -f id_github_bootcamp
```


Add the credentials to ssh config
```
ssh-add ~/{ssh-key-name}

#example
ssh-add ~/id_rsa_efcanchari
```

clone a repository using specific account
```
git clone git@github.com-{bitbucket_username}:{workspace}/{repo}.git

#example
git clone github.com-efcanchari:efcanchari/frank-lapa-bootcamp.git
```


Update url, if you already have cloned the repo
```
git remote set-url origin git@github.com-{bitbucket_username}:{workspace}/{repo}.git

#example
git remote set-url origin git@github.com-efcanchari:efcanchari/frank-lapa-bootcamp.git
```