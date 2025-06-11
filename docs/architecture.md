# Architecture Overview

![AKS-on-Demand Architecture](./images/architecture.png)

1. **Developer**: Submits a PR against `namespace-catalog/` with a new `foo-namespace.yaml`.
2. **GitHub Actions**: Validates PR, runs Terraform on `terraform/` to update Azure infra.
3. **Azure Function**: Triggers on Terraform apply; sends approval notification to AAD managers.
4. **Reviewer**: Approves via email/LogicApp → merges PR.
5. **ArgoCD**: Detects change in `namespace-catalog/`, syncs new Namespace + policies into AKS.
6. **AKS**: New namespace created with quotas, network policies, and secrets from Key Vault.
