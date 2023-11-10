---
title: "Components"
description: ""
summary: ""
date: 2023-09-25T21:25:32+05:30
lastmod: 2023-09-25T21:25:32+05:30
draft: false
img: []
menu:
  docs:
    parent: ""
    identifier: "comps-83666302c7be7b5900da187f2f091dfb"
weight: 40
toc: true
---

This page describes the syntax, styles and variable usage with all the components supported in Quick-FTXUI

## 1. Button 

`Button` can be used to execute commands, like to exit the TUI, or to execute shell commands (bash & ps supported). 
Syntax for defining a `Button` is:

```sh
[color] Button {
  "[Button_label]",
  [command],
  [Button_style],
  [variable_name]
}
```

where,
  - `color` is used to give color to the Button
  - `Button_label` is the label given to the button
  - `command`, which can be `"Exit"`, or a `System()` call.  
  - `Button_style`, which can be Animated or Ascii. Its an optional parameter.
  - `variable_name`, where the variable is of type`str`. If `System()` call is used, then variable has to be defined necessarily. 

Now, lets take a look at some examples, which will depict all the styles and commands which we can execute
  - Basic button, to exit the UI
    ```sh
    Button {
      "Exit",
      "Exit"
    }
    ```
    which looks like this:
    <img src="/img/button-1.png" alt="Basic button"/>

  - Red Animated Button, to list the items in the current directory
    ```sh
    str z = "init"
    Red Button {
      "ls -l",
      System("ls -l"),
      Animated,
      z
    }
    ```
    which looks like this: <br/>
    <img src="/img/button-2.png" alt="ls -l button"/>
  
  - Blue Ascii Button, to open chrome (in at least Ubuntu)
    ```
    str z = "init"
    BlueLight Button{
      "chrome",
      System("/usr/bin/google-chrome-stable"),
      Ascii,
      z
    }
    ```
    which looks like this: <br/>
    <img src="/img/button-3.png" alt="chrome button"/>

  Now we will see all these buttons in action:

  <video width="100%" height="auto" controls>
    <source src="/img/button-video.webm" type="video/webm"/>
    Your browser does not support the video tag.
  </video>

  You can find the complete example here: [Button.qf](https://github.com/vrnimje/quick-ftxui/blob/master/examples/Button.qf)

  Note: Since we used the same variables for both the `Button`s, the output from their commands were both reflected in `z`'s value.

## 2. Slider

`Slider` is used to select a numerical value between a specified range. 
Syntax for defining a `Slider` is
```sh
[color] Slider {
  "[Slider_label]",
  [variable_name],
  [range_min],
  [range_max],
  [step]
}
```

where,
  - `color` is used to give color to the Slider
  - `Slider_label`, which provides the label for the slider
  - `variable_name`, where the variable is of type `int`, and stores the selected value
  - `range_min`, which specifies the minimum value of the range
  - `range_max`, which specifies the maximum value of the range
  - `step`, which specifies the step value by which the slider's value will increase or decrease

Now, lets take a look at some examples, which will depict how `Slider`s can be configured and used

  - A Blue Slider, for choosing any value between 0 and 100
    ```
    int x = 5
    Blue Slider{
      "Slider 1: ",
      x,
      0,
      100,
      1
    }
    ```
    which looks like:
    <img src="/img/slider-1.png" alt="0-100 1 step Slider"/>

  - A YellowLight Slider, for choosing any even number between 0 and 100
    ```sh
    int y = 40
    YellowLight Slider{
      "Slider 2: ",
      y,
      0,
      100,
      2
    }
    ```

    which looks like:
    <img src="/img/slider-2.png" alt="0-100 2 step Slider"/>

  Lets look at these sliders we have defined in action:

  <video width="100%" height="auto" controls>
    <source src="/img/slider-video.webm" type="video/webm"/>
    Your browser does not support the video tag.
  </video> 


  As we can see, the YellowLight `Slider` was progressing faster than the BlueLight one, as its step value was greater. 
  
  You can check out the full example here: [Slider.qf](https://github.com/vrnimje/quick-ftxui/blob/master/examples/Slider.qf)


  Note: Avoid using `Slider`s in Horizontal blocks, as it results in its compaction like described below<br/>
  <img src="/img/slider-3.png" alt="slider defect"/><br/>
  (The slider is at its max range)

## 3. Input

`Input` is used to access textual inputs from the user. 
Syntax for defining an `Input` is:

```sh
[color] Input {
  "[Placeholder]",
  [Input_Option],
  [variable_name]
}
```
where
  - `color` colors the input field and the text inside (if any)
  - `Input_Option` can either be `None` or `Password`. If not specified, defualt is `None`. In `Password`, the input text (while in the TUI) is hidden
  - `variable_name`, which is of type `str`. If not specified, script will raise error

Now lets explore some examples

  - A GreenLight Input, with initial value of "John"
    ```sh
    str f = "John"
    GreenLight Input {
        "First Name....",
        f
    }
    ```

    which renders like: <br/>
    <img src="/img/input-1.png" alt="defualt input"/><br/>

  - A Red Password field
    ```sh
    str p
    Red Input {
        "Password....",
        Password,
        p
    }
    ```

    which looks initially something like this:<br/>
    <img src="/img/input-2.png" alt="password w/out text"/><br/>

    and with text looks like: <br/>
    <img src="/img/input-3.png" alt="password w/ text"/><br/>

  Now lets see an actual demo:

  <video width="100%" height="auto" controls>
    <source src="/img/input-video.webm" type="video/webm"/>
    Your browser does not support the video tag.
  </video> 

  You can check out the full example here: [input.qf](https://github.com/vrnimje/quick-ftxui/blob/master/examples/input.qf)

## 4. Dropdown, Toggle and Menu

`Dropdown`s, `Toggle`s & `Menu`s are used to present a list of options to the user to choose one from. They all have similar syntax, the only difference between them is their representation.

Syntax for defining a `Dropdown` is: 
```sh
[color] Dropdown {
  ["list_item_1", "list_item_2", ... , "list_item_n", ],
  [variable_name]
} 
```

where,
  - `color` will be applied to the `Dropdown`
  - `list_item_i` refers to the options that will be given to the user
  - `variable_name` of type `int`, to store option no. selected. Do note that the option numbers start from `0` 

Syntax for defining a `Toggle` is also same
```sh
[color] Toggle {
  ["list_item_1", "list_item_2", ... , "list_item_n", ],
  [variable_name]
} 
```
Syntax for defining a `Menu` is same, except for Option for Menu
```sh
[color] Menu {
  ["list_item_1", "list_item_2", ... , "list_item_n", ],
  [Menu_Option],
  [variable_name]
} 
```

where,
  - `Menu_Option` can be `Vertical`, `Horizontal`, `HorizontalAnimated` and `VerticalAnimated`. The `Animated` options have transition while switching between the options.

Lets look at some examples for the same:

- A Horizontal Red Menu, with animated tranistions between the options
  ```sh
  int x
  Red Menu{
    [ "Physics", "Maths", "Chemistry", "Biology",],
    HorizontalAnimated,
    x
  }
  ```
  which looks like this: <br/>
  <img src="/img/menu-1.png" alt="animated menu"/>

- A normal, Vertical Green Menu
  ```sh
  int a
  Green Menu {
    [ "Physics", "Maths", "Chemistry", "Biology",],
    Vertical,
    a
  }
  ```
  which looks like this: <br/>
  <img src="/img/menu-2.png" alt="animated menu"/>


- A BlueLight Dropdown
  ```sh
  int z
  BlueLight Dropdown {
    [ "Zain", "Mahesh", "Alqama", "Vaidic", "Mundane", "Advait", ],
    z
  }
  ```

  which looks like this: <br/>
  <img src="/img/dropdown-1.png" alt="animated menu"/>

- A Cyan Toggle
  ```sh
  int y
  Cyan Toggle {
    [ "On", "Off", ],
    y
  }
  ```
  which looks like this: <br/>
  <img src="/img/toggle-1.png" alt="animated menu"/>

  Now lets take a look at how these components work:

  <video width="100%" height="auto" controls>
    <source src="/img/menu-video.webm" type="video/webm"/>
    Your browser does not support the video tag.
  </video> 

  You can check out the full example here: [menu_toggle_dropdown.qf](https://github.com/vrnimje/quick-ftxui/blob/master/examples/menu_toggle_dropdown.qf)











  


    
