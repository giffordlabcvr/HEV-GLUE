# HEV-GLUE

<img src="md/glue-logo.png" align="right" alt="" width="240"/>

A GLUE project for Hepatitis E virus

Hepatitis E virus (HEV) is an important cause of viral hepatitis, primarily transmitted through the fecal-oral route, especially in regions with inadequate sanitation. It is a member of the Hepeviridae family and has four main genotypes, with genotypes 1 and 2 typically associated with outbreaks in developing countries, while genotypes 3 and 4 are linked to zoonotic transmission in developed countries. Symptoms of HEV infection include fatigue, jaundice, abdominal pain, and loss of appetite, with most cases resolving spontaneously. However, the virus can lead to severe complications, particularly in pregnant women, and chronic infection may occur in immunocompromised individuals.

Diagnosis is made through serological tests or molecular methods, while prevention relies on improved sanitation, hygiene practices, and food safety measures. Although a vaccine is available in some countries, it is not widely used globally. Supportive care is the mainstay of treatment, with ribavirin sometimes used for chronic cases. Continued research is vital to understand HEV's epidemiology and improve prevention and treatment strategies.

HEV-GLUE is a linked dataset and set of analysis modules for analysis of hepatitis E virus sequences, developed using the **[GLUE](http://glue-tools.cvr.gla.ac.uk/)** software framework. You can use HEV-GLUE to perform offline, batched analysis of HEV sequence files, including consensus and NGS data.

* * * * *

## Installation

To install HEV-GLUE, follow the instructions provided in the **[User Guide](https://github.com/giffordlabcvr/HEV-GLUE/wiki)**.

You can choose between:

-   **[Docker-based installation](https://github.com/giffordlabcvr/HEV-GLUE/wiki/Docker-Installation)** for ease of deployment.
-   **[Native installation](https://github.com/giffordlabcvr/HEV-GLUE/wiki/Native-Installation)** for traditional setup.

HEV-GLUE can be installed as a prebuilt database for quick setup or constructed from scratch for more customization.


* * * * *

## Usage

Here are some examples of useful things you can do with the HEV-GLUE offline project. In each case the command should be run in project mode (use `project hev` to enter this mode).  

1. **Run maximum likelihood clade assignment (MLCA) on a FASTA file**. This is a clade assignment method described in the [GLUE article](http://glue-tools.cvr.gla.ac.uk/#/about#citeGlue). The file may contain multiple sequences. The output will contain, for each sequence, genotype and subtype assignments, plus an indication of the most closely related reference sequence.
```
Mode path: /project/hev
GLUE> module hevMaxLikelihoodGenotyper genotype file -f path/to/mySequences.fasta -l HIGH 
```

2. **Analyse the frequencies of amino acid residues amongst public sequences in a particular genome region**. This command will analyse the set of curated genotype 3 sequences within the dataset. It will list the frequency of amino acid residues for codon locations between 1630 and 1640 in the RdRp region of the genome.
```
Mode path: /project/hev
GLUE> alignment AL_3 amino-acid frequency -c -w "referenceMember=false"  -r REF_MASTER_M73218 -f RdRp --labelledCodon 1630 1640
```

3. **Analyse the frequencies of amino acid residues at individual locations within a SAM or BAM file**. This command will accept a SAM or BAM file. It uses MLCA and BLAST+ to generate an accurate alignment between the reference coordinate space within the SAM file and a curated reference sequence within the GLUE project. Then it translates each individual aligned read within that space, and sums the set of reads which produce each alternative residue. This example translates the RdRp region. You can specify other coding regions; use `list feature` to see the various genome features which have been defined.
```
Mode path: /project/hev
GLUE> module hevSamReporter amino-acid -i path/to/myNgsData.sam -r REF_MASTER_M73218 -f RdRp -p
```


* * * * *


## Contributing

We welcome contributions from the community! If you're interested in contributing to HEV-GLUE, please review our [Contribution Guidelines](./md/CONTRIBUTING.md).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./md/code_of_conduct.md)


* * * * *


## Credits

The project was developed by Josh Singer and Rob Gifford with help from Tamer Abdelrahman and Ahmed Alnamroty.


* * * * *

