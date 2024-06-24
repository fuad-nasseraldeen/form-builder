import os
import requests

# Read the GITHUB_TOKEN from environment variable
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')

if not GITHUB_TOKEN:
    raise ValueError("GitHub token is not set in environment variables")

headers = {
    'Authorization': f'token {GITHUB_TOKEN}',
    'Accept': 'application/vnd.github.v3+json',
}

owner = 'fuad-nasseraldeen'
repo = 'form-builder'
branch = 'main'  # or the branch you want to protect

# Ensure the owner, repo, and branch are correct
url = f'https://api.github.com/repos/{owner}/{repo}/branches/{branch}/protection'

protection_rules = {
    "required_status_checks": {
        "strict": True,
        "contexts": []
    },
    "enforce_admins": True,
    "required_pull_request_reviews": {
        "dismissal_restrictions": {},
        "dismiss_stale_reviews": True,
        "require_code_owner_reviews": True,
        "required_approving_review_count": 2
    }
    # Remove 'restrictions' if the repository is not an organization repo
}

response = requests.put(url, headers=headers, json=protection_rules)

if response.status_code == 200:
    print("Branch protection updated successfully.")
else:
    print(f"Failed to update branch protection: {response.status_code}")
    print(response.json())