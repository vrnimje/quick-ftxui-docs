---
title: "DOM"
description: ""
summary: ""
date: 2023-09-25T21:25:51+05:30
lastmod: 2023-09-25T21:25:51+05:30
draft: false
img: []
menu:
  docs:
    parent: ""
    identifier: "dom-9657ccdf8d8ff79591ead875f79bda0d"
weight: 50
toc: true
---

This page describes how to use DOM elements, which can be used for structuring and adding order to the TUI

## 1. Text

A `Text` is equivalent to `print` in most conventional programming languages. It is used for describing the various elements of the UI.

Syntax for defining a `Text` is:

```sh
[color] [Text_style] Text("[string]", "[href]")
```

Note: The text doesn't resize according to size of terminal video

where 
  - `color` will change the text's color only
  - `string` is the text to be displayed
  - `Text_style` can be `bold`, `dim`, `underlined`, `inverted`, `blink`, `underlined`, `underlinedDouble` & `hyperlink`
  - `href` is mentioned only when `hyperlink` `Text` Style is used, to provide the link to be opened

Now, lets take a look at some examples, to determine how they work:

  - Yellow and Bold text, saying "This is bold, yellow text"
    ```sh
    Yellow bold Text("This is bold, yellow text")
    ```
    which looks like: <br/>
    <img src="/quick-ftxui-docs/img/text-1.png" alt="bold text"/>

  - Red and Inverted text
    ```sh
    Red inverted Text("This has an inverted look")
    ```
    which looks like: <br/>
    <img src="/quick-ftxui-docs/img/text-2.png" alt="inverted text"/>

  - Blue Text, which links to [google.com](https://google.com)
    ```sh
    Blue hyperlink Text("Google", "https://www.google.com/")
    ```
    which looks like: <br/>
    <img src="/quick-ftxui-docs/img/text-3.png" alt="link text"/>


  Lets see all the text styles together 

  <video width="100%" height="auto" controls>
    <source src="/quick-ftxui-docs/img/text-video.webm" type="video/webm"/>
    Your browser does not support the video tag.
  </video>

  You can find the full example demo'ed above here: [text_styles.qf](https://github.com/vrnimje/quick-ftxui/blob/master/examples/text_styles.qf)


## 2. Paragraph

A `Paragraph` is used for long-sized text. Hence, it also resizes according to the size of the terminal window. 

Syntax for defining a `Paragraph` is:

```sh
[color] Paragraph("[string]")
```

Lets take a look at an example, to define a MagentaLight Paragraph, with text describing the Bayes theorem:

```sh
MagentaLight Paragraph("In probability theory and statistics, Bayes' theorem (alternatively
Bayes' law or Bayes' rule) describes the probability of an event, based on prior knowledge
of conditions that might be related to the event. For example, if cancer is related to age,
then, using Bayes' theorem, a person's age can be used to more accurately assess the
probability that they have cancer, compared to the assessment of the probability of cancer
made without knowledge of the person's age. One of the many applications of Bayes' theorem
is Bayesian inference, a particular approach to statistical inference. When applied, the
probabilities involved in Bayes' theorem may have different probability interpretations.
With the Bayesian probability interpretation the theorem expresses how a subjective degree
of belief should rationally change to account for availability of related evidence.
Bayesian inference is fundamental to Bayesian statistics.")
```
which looks like this:
<img src="/quick-ftxui-docs/img/para-1.png" alt="para"/>

Now lets see a video demo for the same:

<video width="100%" height="auto" controls>
  <source src="/quick-ftxui-docs/img/para-video.webm" type="video/webm"/>
  Your browser does not support the video tag.
</video>

You can find the full example demo'ed above here: [paragraph.qf](https://github.com/vrnimje/quick-ftxui/blob/master/examples/paragraph.qf)

## 3. Separator

A `separator` is used to segment the TUI about various elements of the UI, like components, blocks, `Text`s or `Paragraph`s. 

Syntax for defining a `separator` is:
```sh
[separator_type] separator
```

where the `separator_type` can be `Normal`, `Light`, `Heavy`, `Double` or `Dashed`. If not ,entioned, then the `Normal` style (which is shown below) is used. 

Here is all the types of separators, and their appearance
```sh
Vertical{
  Text("Normal")
  Normal separator
  Text("Light")
  Light separator
  Text("Heavy")
  Heavy separator
  Horizontal {
    Text("Double")
    Double separator
    Text("lorem ipsum")    
  }
  separator
  Text("Dashed")
  Dashed separator
  Button {
    "Exit",
    "Exit",
    Animated
  }
}
```
<img src="/quick-ftxui-docs/img/sep-1.png" alt="sep"/> <br/>

You can checkout the example in previous [`Paragraph`'s section](#2-paragraph) to see how they are actually used

## 4. Borders

`Borders` are used to add a border around any block. It provides a enclosure to the components and DOM elements defined inside the block. It also works for nested blocks (refer to Overview section of the user manual)

To define a border, the syntax is:

```sh
[Border_Type] [Block_Alignment] {
  ...
}
```

where `Border_Type` can be `Border`, `LightBorder`, `HeavyBorder`, `DashedBorder`, `RoundedBorder` & `DoubleBorder`, which are described below:

```sh
Vertical {
    Border Vertical {
        Text("This is normal border")
    }

    LightBorder Vertical {
        Text("This is light border")
    }

    HeavyBorder Vertical {
        Text("This is heavy border")
    }

    DashedBorder Horizontal {
        Text("This is dashed border")
    }

    RoundedBorder Vertical {
        Text("This is rounded border")
    }

    DoubleBorder Vertical {
        Text("This is double border")
    }
}
```
<img src="/quick-ftxui-docs/img/border-1.png" alt="border"/>




















