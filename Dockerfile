# ベースイメージとしてNode.jsを使用
FROM node:18-alpine

# 作業ディレクトリを作成
WORKDIR /app

# 必要なファイルをコピー
COPY package*.json ./

# パッケージのインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# ビルドプロセス
RUN npm run build

# ポートを指定
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["npm", "start"]
