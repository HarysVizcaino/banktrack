import { View, StyleSheet, Image } from "react-native";
import "@/locales/i18n";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import LargeButton from "@/components/atoms/LargeButton";
import { HeaderText, ParagraphText } from "@/components/atoms/StyledText";
import HelpButton from "@/components/molecules/HelpButton";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";

const LOGO = require("../assets/images/banklogo.png");

export default function HomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <View style={styles.container}>
       
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '50%' }}>
        <LanguageSwitcher />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: '50%' }}>
        <HelpButton onPress={() => { console.log('Help!!!') }} />
        </View>
        </View>
      <View style={styles.body}>
        <View style={styles.logoContainer}>
          <Image 
          source={LOGO} 
          style={styles.logo}
          />
        </View>
        <HeaderText style={{ marginBottom: 10, fontSize: 44, }}>
        {t("welcome")}
        </HeaderText>
        <ParagraphText>{t("description")}</ParagraphText>
      </View>
      <View>
        <LargeButton
          label={t("register")}
          onPress={() => router.navigate("About")}
        />
        <LargeButton
          label={t("login")}
          onPress={() => router.navigate("/login")}
          variant="outline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 12,
    paddingRight: 12,
    height: 70,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 18,
  },
  logo: {
    width: 230,
    height: 230,
  }
});
