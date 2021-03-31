#! eqela ss-0.21
#
# This file is part of Sling Tasklist
# Copyright (c) 2021 Eqela
# All right reserved.
#

lib sling-tools:0.45.0
import sling.tools.compiler
SlingCompilerTool.forSushiApplicationDirectory("app").executeScript(args)
