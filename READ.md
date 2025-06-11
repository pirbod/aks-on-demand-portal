# AKS-on-Demand Self-Service Namespace Portal

**Empower dev teams** to spin up compliant, isolated AKS namespaces via GitOps-driven PRs and an automated approval workflow.

###  Key Capabilities
- **On-demand Namespace Provisioning**: Devs submit PR with namespace spec → Terraform runs via GitHub Actions.
- **Automated Approval**: Azure Function routes approval requests to Azure AD group managers.
- **GitOps Delivery**: ArgoCD syncs approved `namespace-catalog` repo to enforce state.
- **Policy-Driven Quotas & Networking**: CPU/memory quotas + network policies baked into module.

###  Tech Stack
- **Terraform** (AKS, VNet, AAD, Key Vault, MSI)
- **GitHub Actions** (CI/CD for Terraform plan/apply)
- **ArgoCD** (GitOps reconciliation)
- **Azure Functions** (Approval orchestration)
- **Azure Key Vault + Managed Identities** (Secrets management)

###  Outcomes
Demonstrates **scalable** IaC, **self-service** enablement, and **enterprise-grade** security posture.

### Prerequisites
- Azure subscription with Contributor rights
- Service principal + MSI enabled on target RG
- ArgoCD instance deployed to your cluster
- GitHub repo with branch protection + required reviews

### Quickstart
1. Clone repo  
2. `cd terraform && terraform init && terraform apply`  
3. Create a PR in `namespace-catalog` folder with `%namespace%.yaml`  
4. Approver receives notification → merges PR  
5. ArgoCD auto-syncs new namespace into AKS  
