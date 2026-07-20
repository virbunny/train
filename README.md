# 日本觀光列車｜旅印帖 v62 PWA 版

## 檔案
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tourist-train-rabbit-icon-v62-180.png`
- `tourist-train-rabbit-icon-v62-192.png`
- `tourist-train-rabbit-icon-v62-512.png`
- `日本觀光列車_旅印帖_週報交接_v62.md`

## v62 更新
- しまんトロッコ：補 2026-07-18 起土砂流入影響造成トロッコ車廂可搭乘區間縮短的臨時警示。
- 伊予灘ものがたり：補 2026-07-26 運行開始十二周年與紀念品資訊。
- くまモンアドベンチャー号：新增為期間限定主卡，不列入固定 D&S 名單。
- 36ぷらす3、GRAN 天空、Les Saveurs 志摩、富良野・美瑛ノロッコ号、くしろ湿原ノロッコ号等必改項已確認保留。
- 清單總數：178 筆。
- localStorage 新 key：`jp_tourist_train_tabijirushi_v62_20260720_weekly_updates`。
- 已將 v61 key 加入 LEGACY_KEYS。

## 透明桌面圖示處理
- 使用 v62 圖示檔名。
- manifest 只指向新的透明 PNG。
- 不提供 maskable 圖示。
- service worker 快取名稱已更新為 v62。

## 安裝提醒
若手機或桌面仍顯示舊圖示，請先刪除舊 PWA／舊桌面捷徑，清除網站資料或快取後，再重新安裝。
