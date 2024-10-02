import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      // Diretório padrão de componentes (src/components)
      dirs: ['src/components'],
      // Procurar componentes automaticamente dentro de subdiretórios
      deep: true,
      // Arquivos que o plugin irá observar
      extensions: ['vue'],
      // Prefixo para componentes. Ex: se prefix é 'App', ele importará como <AppButton>
      directoryAsNamespace: false,
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts', // Gera definições automáticas para TypeScript
    }),
  ],
});
