variable "resource_group_name" { type = string }
variable "location"            { type = string }
variable "aks_cluster_name"    { type = string }
variable "node_count"          { type = number }
variable "node_vm_size"        { type = string }
variable "aad_admin_group_id"  { type = string }
