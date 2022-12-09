---
title: Home
layout: default
vid-links:
- 535598169
- 535598027
- 535598646
- 535598773
vid-titles:
- "Just Start #1"
- "Just Start #2"
- "Python in VS Code"
- "Python in Rhino and Grasshopper"
---
<!-- ABOUT -->
{% capture about %}

<!-- Edit below to change body text of About -->
<mark>L.E.A.R.N.</mark> is a platform dedicated to beginner-friendly creative coding tutorials and exercises for building architecture with robots.

In these tutorials, we will introduce computational methods for architecture, fabrication & construction, incentivising computational literacy. Students will learn the theoretical background and basic implementation details of fundamental datastructures and algorithms, and to plan and control robot tasks in CAD environments using the [COMPAS](https://compas.dev/) and [COMPAS FAB](https://gramaziokohler.github.io/compas_fab/latest/) framework, and other open-source libraries.

We want to provide access to our tutorials for as many students as possible. If you are affiliated with TUM or Princeton, you can register for the class. If you are a student from another university or simply interested in Digital Fabrication using robots, you can simply access the tutorial videos through this webpage.
<!-- END OF SECTION -->

{% endcapture %}

<!-- GET STARTED -->
{% capture get-started %}

<!-- Keep these figure tags unindented, Jekyll interprets tabbed HTML as MD code blocks -->
<!-- Iteratively get the videos -->
{% for link in page.vid-links %}
{% assign i = forloop.index | minus:1 %}
<figure>
    <iframe src="https://player.vimeo.com/video/{{ link }}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <figcaption><a href="https://vimeo.com/{{ link }}" target="_blank">{{ page.vid-titles[i] }}</a></figcaption>
</figure>
{% endfor %}

<!-- Edit below to change the text of Get Started -->
1. ##### Setting up the Anaconda environment with COMPAS

Execute the commands below in Anaconda Prompt:
```
(base) conda config --add channels conda-forge
```

###### Windows
```
(base) conda create -n learn python=3.8 compas_fab=0.17 --yes
(base) conda activate learn
```

###### Mac
```
(base) conda create -n learn python=3.8 compas_fab=0.17 python.app --yes
(base) conda activate learn
```

###### Verify Installation
```
(learn) pip show compas_fab ####
Name: compas-fab
Version: 0.13.1
Summary: Robotic fabrication package for the COMPAS Framework
…
```

###### Install on Rhino
```
(learn) python -m compas_rhino.install
```

NOTE: This installs to Rhino 6.0, use -v 5.0 if needed.

2. ##### Installation of Dependencies
```
(learn) conda install git
```

###### Assembly Information Model
```
(learn) python -m pip install git+https://github.com/augmentedfabricationlab/assembly_information_model@master#egg=assembly_information_model
(learn) python -m compas_rhino.install -p assembly_information_model
```

###### UR Fabrication Control
```
(learn) python -m pip install git+https://github.com/augmentedfabricationlab/ur_fabrication_control@master#egg=ur_fabrication_control
(learn) python -m compas_rhino.install -p ur_fabrication_control
```

3. ##### Cloning the Course Repository

Create a workspace directory:
```
C:\Users\YOUR_USERNAME\workspace
```

Then open Github Desktop and clone the following repository into you workspace folder: [L.E.A.R.N. repository](https://github.com/le-ar-n/le-ar-n)

<!-- HTML for the fun skewed text -->
<aside> <h4 class="white-skewed-headline display-block"><mark>Voilà!</mark></h4> </aside>

You can now go to VS Code, Rhino or Grasshopper to run the example files!

<!-- END OF SECTION -->

{% endcapture %}

{% include body.html %}