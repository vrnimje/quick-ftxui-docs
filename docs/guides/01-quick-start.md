---
title: "Quick Start"
description: ""
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "example-6a1a6be4373e933280d78ea53de6158e"
weight: 10
toc: true
---

This page will guide you through setting up Quick-FTXUI's repository & running the examples

## 1. Clone the Repository

First, clone the repository in your system

~~~sh
  git clone https://github.com/vrnimje/quick-ftxui.git
  cd quick-ftxui
~~~

## 2. Build 

Then, in the directory, create a `build` folder and build the project, with examples, using CMake

~~~bash
  mkdir build
  cd build
  cmake .. -GNinja -DQUICK_FTXUI_FETCH_BOOST=On -DQUICK_FTXUI_EXAMPLES=On
~~~

## 3. Run Examples

To run the examples, execute the following command, for C++ examples

~~~bash
  ./examples/quick_ftxui_example
~~~

For QF examples (`.qf` files), execute the following command

~~~bash
  ./quick-ftxui ../examples/[file_name].qf
~~~

## Further reading

Read the [docs](/docs/user-manual) for understanding the Quick-FTXUI language
