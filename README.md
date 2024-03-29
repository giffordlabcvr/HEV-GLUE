# HEV-GLUE
GLUE project for Hepatitis E virus

## Description

HEV-GLUE is a linked dataset and set of analysis modules for analysis of hepatitis E virus sequences. It is the underlying GLUE project for the [HEV-GLUE web application](http://hev.glue.cvr.ac.uk). HEV-GLUE is hosted within the [GLUE bioinformatics environment](http://glue-tools.cvr.gla.ac.uk/). You can use HEV-GLUE to perform offline, batched analysis of HEV sequence files, including consensus and NGS data.

## Installation

1. Install GLUE, based on the [GLUE installation instructions](http://glue-tools.cvr.gla.ac.uk/#/installation). 
2. Use Git to clone the HEV-GLUE repository into your `gluetools/projects` directory.
3. Within the `gluetools/projects/HEV_GLUE` directory, start GLUE and build the HEV-GLUE project by issuing the following command in GLUE:
```
Mode path: /
GLUE> run file hevProject.glue
```
4. This should run to completion and produce the `OK` result.

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

## Contributing

If you are interested in extending the project in any way, please contact [Josh Singer](mailto:josh.singer@glasgow.ac.uk). 

## Credits

The project was developed by Josh Singer with help from Tamer Abdelrahman, Rob Gifford and Ahmed Alnamroty.

