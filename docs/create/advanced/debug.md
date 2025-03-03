---
sidebar_position: 3
title: Debugging
description: Tricks and tips for debugging Archway projects
---

# Debugging

Tricks and tips for debugging Archway projects.

<!-- ## Debugging Rust contracts -->
<!-- ## Writing unit tests -->

## Debug the developer CLI

Sometimes the CLI panics inside of a Node.js thread and exits with a nondescript error message. You can trace the actual source of the error by setting `DEBUG=*`

Example:

```bash
DEBUG=* archway deploy --args '{ "name": "debugger", "symbol": "dbg!", "minter": "archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq" }'
```


## Debug failing transactions

If your transaction is failing use the `cargo schema` command to regenerate schema requirements for your project. The generated files will explain exactly what keys, types and values are permissible for entrypoints of the contract.

Example:

```bash
$ cargo schema
    Finished dev [unoptimized + debuginfo] target(s) in 0.10s
     Running `target/debug/examples/schema`
Removing "/home/user/projects/increment-project/schema/state.json" …
Removing "/home/user/projects/increment-project/query_msg.json" …
Removing "/home/user/projects/increment-project/instantiate_msg.json" …
Removing "/home/user/projects/increment-project/count_response.json" …
Removing "/home/user/projects/increment-project/execute_msg.json" …
Created /home/user/projects/increment-project/instantiate_msg.json
Created /home/user/projects/increment-project/execute_msg.json
Created /home/user/projects/increment-project/query_msg.json
Created /home/user/projects/increment-project/state.json
Created /home/user/projects/increment-project/count_response.json
```

Now you can print the regenerated schema for `instantiate_msg` to see what are the type and format requirements for your particular instantiation.

Example:

```bash
$ cat schema/instantiate_msg.json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "InstantiateMsg",
  "type": "object",
  "required": [
    "count"
  ],
  "properties": {
    "count": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```

The above schema tells us we should be sending arguments to the deployer in the format `--args '{"count":0}'`. For example, sending them as `--args '{"count":"0"}'` will fail.