#!/bin/bash
gluetools.sh -d -l -p cmd-result-format:tab -E -i project hev module hevMaxLikelihoodGenotyper genotype placer-result -f placements/ncbiHev.xml --detailLevel HIGH > tabular/ncbiHevGenotypes.txt &
