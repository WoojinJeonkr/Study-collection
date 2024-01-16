# Introduce

기존에 존재하던 repository들을 정리하여 하나로 모아놓은 repository입니다.

## Migrating Commit History from an Existing Repository to a New Repository

먼저, 기존 레포지토리를 새로운 레포지토리에 서브트리로 추가합니다. 이를 위해 다음 명령어를 사용합니다.

```bash
git subtree add --prefix=new_folder_name previous_repo_url previous_repo_default_branch
```

이제 git push해주면 됩니다.
