import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Hardware Support</PricingCardPlan>
                <PricingCardCost>2 minutes</PricingCardCost>
                <PricingCardLength>average wait time</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    100 New Support Analysts added
                  </PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Support</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Software Support</PricingCardPlan>
                <PricingCardCost>5 minutes</PricingCardCost>
                <PricingCardLength>average wait time</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    1000 New Support Analysts added
                  </PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Support</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Human Resources</PricingCardPlan>
                <PricingCardCost>1 minute</PricingCardCost>
                <PricingCardLength>average wait time</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    300 New Support Analysts added
                  </PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Support</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
