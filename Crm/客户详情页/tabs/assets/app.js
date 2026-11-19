/* ==================== 账户数据（一公司多账户，服务与会员各自独立） ==================== */
var ACCTS = [
  { id:'15650132296', aid:'3802101', login:'15650132296', rphone:'15650132296', secure:'15801139027', name:'林国栋', dept:'董事长办公室 / 董事长', level:'vip', levelText:'VIP会员', main:true,
    act:'查看信息', actAt:'2026-11-12', reg:'2024-01-18 10:24', last:'2026-11-12 08:41', terminal:'APP', spend:'¥ 12,800.00', expire:'2027-03-15', status:'生效中', days:117,
    svc:{ assist:'2024-01-18', member:'2024-06-02', app:'2026-11-12', mini:'2026-11-02' } },
  { id:'wangyan_bd', aid:'3802108', login:'wangyan_bd', rphone:'13910527864', secure:'13910529811', name:'王燕', dept:'招投标部 / 部门经理', level:'plus', levelText:'Plus会员',
    act:'搜索', actAt:'2026-11-13', reg:'2024-03-06 14:02', last:'2026-11-11 19:22', terminal:'小程序', spend:'¥ 9,800.00', expire:'2026-12-31', status:'生效中', days:43,
    svc:{ assist:'2024-03-06', member:'2024-08-15', app:'', mini:'2026-11-11' } },
  { id:'lifang_fin', aid:'3802115', login:'lifang_fin', rphone:'13621740093', secure:'', name:'李芳', dept:'财务部 / 财务主管', level:'free', levelText:'免费会员',
    act:'查看信息', actAt:'2026-11-10', reg:'2024-05-21 09:13', last:'2026-11-10 17:05', terminal:'APP', spend:'¥ 6,600.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'2024-05-21', member:'', app:'2026-11-10', mini:'2026-10-19' } },
  { id:'chent_zb', aid:'3802123', login:'chent_zb', rphone:'18810295571', secure:'18810291208', name:'陈涛', dept:'招投标部 / 标书专员', level:'standard', levelText:'标准会员',
    act:'下载标讯', actAt:'2026-11-11', reg:'2024-07-09 16:38', last:'2026-11-09 17:20', terminal:'APP', spend:'¥ 3,200.00', expire:'2026-11-30', status:'即将到期', days:12,
    svc:{ assist:'2024-07-09', member:'2024-09-28', app:'2026-11-09', mini:'' } },
  { id:'zhaolei88', aid:'3802130', login:'zhaolei88', rphone:'13718342066', secure:'', name:'赵磊', dept:'市场部 / 市场专员', level:'free', levelText:'免费会员',
    act:'搜索', actAt:'2026-11-06', reg:'2025-02-14 11:47', last:'2026-11-06 15:31', terminal:'公众号', spend:'¥ 1,200.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'2025-02-14', member:'', app:'', mini:'2026-10-30' } },
  { id:'liuyang1990', aid:'3802142', login:'liuyang1990', rphone:'15011076238', secure:'', name:'刘洋', dept:'项目部 / 项目助理', level:'free', levelText:'免费会员',
    act:'查看信息', actAt:'2026-10-29', reg:'2025-04-02 20:16', last:'2026-10-29 09:07', terminal:'小程序', spend:'¥ 1,000.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'2025-04-02', member:'', app:'', mini:'2026-10-29' } },
  { id:'sunqiang_app', aid:'3802157', login:'sunqiang_app', rphone:'18601350749', secure:'', name:'孙强', dept:'信息部 / IT 负责人', level:'free', levelText:'免费会员',
    act:'查看企业监控', actAt:'2026-11-12', reg:'2025-06-30 10:55', last:'2026-11-12 07:58', terminal:'APP', spend:'¥ 2,000.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'2025-06-30', member:'', app:'2026-11-12', mini:'2026-11-01' } },
  { id:'zhoumin_guest', aid:'3802164', login:'zhoumin_guest', rphone:'13521963380', secure:'', name:'周敏', dept:'行政部 / 前台', level:'free', levelText:'免费会员',
    act:'搜索', actAt:'2026-09-02', reg:'2026-03-11 15:20', last:'2026-09-02 15:11', terminal:'公众号', spend:'¥ 0.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'2026-03-11', member:'', app:'', mini:'' } },
  { id:'hujie2020', aid:'3802171', login:'hujie2020', rphone:'', secure:'', name:'胡杰', dept:'工程部 / 施工员', level:'free', levelText:'免费会员',
    reg:'2025-11-04 09:32', last:'从未登录', terminal:'—', spend:'¥ 0.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'2025-11-04', member:'', app:'', mini:'' } },
  { id:'tanwei888', aid:'3802189', login:'tanwei888', rphone:'13691327405', secure:'', name:'谭薇', dept:'合同部 / 合同管理员', level:'free', levelText:'免费会员',
    act:'查看信息', actAt:'2026-10-21', reg:'2026-05-19 13:08', last:'2026-10-21 10:03', terminal:'小程序', spend:'¥ 0.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'2026-05-19', member:'', app:'', mini:'2026-10-21' } },
  { id:'xiaoyu_hr', aid:'3802196', login:'xiaoyu_hr', rphone:'15501263784', secure:'', name:'余小雨', dept:'人力部 / 招聘专员', level:'free', levelText:'免费会员',
    act:'注册', actAt:'2026-08-27', reg:'2026-08-27 18:44', last:'2026-08-27 18:44', terminal:'公众号', spend:'¥ 0.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'', member:'2026-08-27', app:'', mini:'' } },
  { id:'gongpan_bd', aid:'3802203', login:'gongpan_bd', rphone:'', secure:'', name:'龚攀', dept:'采购部 / 采购员', level:'free', levelText:'免费会员',
    reg:'2026-09-15 11:26', last:'从未登录', terminal:'—', spend:'¥ 0.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'', member:'', app:'', mini:'' } },
  { id:'yuchen02', aid:'3802217', login:'yuchen02', rphone:'13167420853', secure:'', name:'于晨', dept:'投标部 / 资料员', level:'free', levelText:'免费会员',
    act:'搜索', actAt:'2026-11-01', reg:'2026-10-08 20:37', last:'2026-11-01 14:19', terminal:'APP', spend:'¥ 0.00', expire:'', status:'未开通', days:0,
    svc:{ assist:'2026-10-08', member:'', app:'2026-11-01', mini:'' } }
];

function svcChip(label, val, onText, offText, kind) {
  var on = !!val;
  var cls = 'svc' + (on ? (kind === 'app' ? ' on-app' : ' on') : '');
  var txt = on ? (onText + (val ? ' ' + val.slice(5) : '')) : offText;
  return '<span class="' + cls + '" title="' + label + '：' + (on ? onText + ' ' + val : offText) + '">'
       + '<span class="ico"></span>' + label
       + '<span class="meta">' + txt + '</span></span>';
}

/* ==================== 渲染会员状态表（支持会员类型 / 状态筛选） ==================== */
var MEM_LEVELS = [
  { v:'vip', t:'VIP会员' }, { v:'plus', t:'Plus会员' }, { v:'advanced', t:'高级会员' },
  { v:'standard', t:'标准会员' }, { v:'normal', t:'普通会员' }, { v:'madv', t:'移动端高级' },
  { v:'mstd', t:'移动端标准' }, { v:'free', t:'免费会员' }
];
var MEM_STATUS = ['生效中', '即将到期', '未开通'];
var MEM_F = { level: { sel: null, kw: '' }, status: { sel: null, kw: '' } };

function memMatch(a) {
  if (MEM_F.level.sel) { if (a.level !== MEM_F.level.sel) return false; }
  else if (MEM_F.level.kw) {
    var hay = (a.id + ' ' + a.name + ' ' + a.levelText).toLowerCase();
    if (hay.indexOf(MEM_F.level.kw.toLowerCase()) < 0) return false;
  }
  if (MEM_F.status.sel) { if (a.status !== MEM_F.status.sel) return false; }
  else if (MEM_F.status.kw && a.status.indexOf(MEM_F.status.kw) < 0) return false;
  return true;
}

function renderMembers() {
  var tb = document.getElementById('memberTbody');
  if (!tb) return;
  var list = ACCTS.filter(memMatch);
  tb.innerHTML = list.length ? list.map(function (a) {
    var statTag = a.level === 'free' ? '<span class="tag">免费</span>'
      : (a.status === '即将到期' ? '<span class="tag tag-danger">即将到期</span>' : '<span class="tag tag-success">生效中</span>');
    return '<tr>'
      + '<td>' + ordAcctCell({ acct: a.id }) + '</td>'
      + '<td><span class="m-badge m-' + a.level + '">' + a.levelText + '</span></td>'
      + '<td class="dtime">' + dtCell(a.expire ? a.reg : '') + '</td>'
      + '<td class="nowrap">' + (a.expire || '<span class="d-none">—</span>') + '</td>'
      + '<td class="nowrap">' + statTag + '</td>'
      + '<td class="num">' + (a.expire ? a.days : '<span class="d-none">—</span>') + '</td>'
      + '</tr>';
  }).join('') : '<tr><td colspan="6" class="d-empty">没有符合条件的账户</td></tr>';
  var cnt = document.getElementById('memCount');
  if (cnt) cnt.textContent = list.length === ACCTS.length
    ? '共 ' + ACCTS.length + ' 个账户'
    : '筛选出 ' + list.length + ' / 共 ' + ACCTS.length + ' 个账户';
}

/* ==================== 订单数据（JS 渲染，支持支付状态 / 账号筛选） ==================== */
var ORDERS = [
  { no:'DD202611120035', time:'2026/11/12 09:05', acct:'15650132296', type:'Plus会员', spec:'12个月*全国', amt:'¥2,580.00', pay:'待支付', way:'支付宝', owner:'罗屿（一组）', ops:[{t:'订单详情'},{t:'收款'}] },
  { no:'DD202611080012', time:'2026/11/08 10:12', acct:'15650132296', type:'VIP会员', spec:'12个月*全国', amt:'¥3,980.00', pay:'已完成', way:'微信支付', owner:'罗屿（一组）', ops:[{t:'订单详情'},{t:'退款',d:'danger'},{t:'上传合同'},{t:'生成合同'}] },
  { no:'DD202611030007', time:'2026/11/03 15:47', acct:'wangyan_bd', type:'Plus会员', spec:'12个月*全国', amt:'¥2,580.00', pay:'已完成', way:'支付宝', owner:'罗屿（一组）', ops:[{t:'订单详情'},{t:'退款',d:'danger'},{t:'上传合同'},{t:'生成合同'}] },
  { no:'DD202610260031', time:'2026/10/26 09:31', acct:'15650132296', type:'增值服务', spec:'', amt:'¥600.00', pay:'已完成', way:'微信支付', owner:'罗屿（一组）', ops:[{t:'订单详情'},{t:'退款',d:'danger'}] },
  { no:'DD202610190018', time:'2026/10/19 20:05', acct:'lifang_fin', type:'高级会员', spec:'3个月*全国', amt:'¥1,280.00', pay:'已完成', way:'微信支付', owner:'罗屿（一组）', ops:[{t:'订单详情'},{t:'退款',d:'danger'},{t:'上传合同'},{t:'生成合同'}] },
  { no:'DD202610120009', time:'2026/10/12 11:22', acct:'chent_zb', type:'积分包', spec:'5000积分', amt:'¥99.00', pay:'已完成', way:'小程序支付', owner:'系统（未知部门）', ops:[{t:'订单详情'},{t:'退款',d:'danger'}] },
  { no:'DD202609280044', time:'2026/09/28 08:59', acct:'chent_zb', type:'标准会员', spec:'12个月*全国', amt:'¥1,280.00', pay:'已完成', way:'微信支付', owner:'罗屿（一组）', ops:[{t:'订单详情'},{t:'退款',d:'danger'},{t:'上传合同'},{t:'生成合同'}] },
  { no:'DD202609150023', time:'2026/09/15 16:40', acct:'zhaolei88', type:'服务延期', spec:'', amt:'¥0.00', pay:'已生效', way:'人工', owner:'系统（未知部门）', ops:[{t:'订单详情'}] },
  { no:'DD202609100012', time:'2026/09/10 14:26', acct:'lifang_fin', type:'标书制作', spec:'1年*1次', amt:'¥1,500.00', pay:'已完成', way:'微信支付', owner:'罗屿（一组）', ops:[{t:'订单详情'},{t:'退款',d:'danger'},{t:'上传文件'},{t:'生成合同'}] },
  { no:'DD202608300006', time:'2026/08/30 13:18', acct:'15650132296', type:'线下合同补款', spec:'', amt:'¥18,000.00', pay:'已完成', way:'对公转账', owner:'罗屿（一组）', ops:[{t:'订单详情'},{t:'上传合同'},{t:'生成合同'}] }
];

var MBADGE_SHORT = { vip:'VIP', plus:'Plus', advanced:'高级', standard:'标准', normal:'普通', madv:'移动高级', mstd:'移动标准' };
var TYPE_CLS = { 'VIP会员':'t-vip', 'Plus会员':'t-plus', '高级会员':'t-advanced', '标准会员':'t-standard' };
var PAY_STATES = ['待支付', '已完成', '已生效'];
var ACCT_MAP = {};
ACCTS.forEach(function (a) { ACCT_MAP[a.id] = a; });
var ORD_F = { pay: { sel: null, kw: '' }, acct: { sel: null, kw: '' } };

function ordAcctCell(o) {
  var a = ACCT_MAP[o.acct];
  var badge = (a && a.level !== 'free' && MBADGE_SHORT[a.level])
    ? '<span class="m-badge m-' + a.level + '">' + MBADGE_SHORT[a.level] + '</span>' : '';
  return '<div class="oacct"><div class="oacct-id"><span>' + o.acct + '</span>' + badge + '</div>'
    + (a ? '<div class="oacct-nick">' + a.name + '</div>' : '') + '</div>';
}

function ordPayCell(o) {
  var cls = o.pay === '待支付' ? 'ord-pay danger' : 'ord-pay';
  return '<span class="' + cls + '">' + o.pay + '</span><span class="pay-way">' + o.way + '</span>';
}

function ordMatch(o) {
  if (ORD_F.pay.sel) { if (o.pay !== ORD_F.pay.sel) return false; }
  else if (ORD_F.pay.kw && o.pay.indexOf(ORD_F.pay.kw) < 0) return false;
  if (ORD_F.acct.sel) { if (o.acct !== ORD_F.acct.sel) return false; }
  else if (ORD_F.acct.kw) {
    var a = ACCT_MAP[o.acct];
    var hay = (o.acct + ' ' + (a ? a.name : '') + ' ' + o.no).toLowerCase();
    if (hay.indexOf(ORD_F.acct.kw.toLowerCase()) < 0) return false;
  }
  return true;
}

function renderOrders() {
  var tb = document.getElementById('ordTbody');
  if (!tb) return;
  var list = ORDERS.filter(ordMatch);
  tb.innerHTML = list.length ? list.map(function (o) {
    return '<tr>'
      + '<td class="ordno">' + o.no + '</td>'
      + '<td class="ord-time">' + o.time.split(' ')[0] + '<span>' + o.time.split(' ')[1] + '</span></td>'
      + '<td>' + ordAcctCell(o) + '</td>'
      + '<td class="ord-type ' + (TYPE_CLS[o.type] || '') + '">' + o.type + '</td>'
      + '<td class="ord-spec">' + (o.spec ? o.spec : '<span class="ord-none">—</span>') + '</td>'
      + '<td class="num">' + o.amt + '</td>'
      + '<td>' + ordPayCell(o) + '</td>'
      + '<td>' + o.owner + '</td>'
      + '<td><div class="op-links">' + o.ops.map(function (x) {
          return '<button class="op-link' + (x.d ? ' ' + x.d : '') + '" type="button">' + x.t + '</button>';
        }).join('') + '</div></td>'
      + '</tr>';
  }).join('') : '<tr><td colspan="9" class="ord-empty">没有符合条件的订单</td></tr>';
  var cnt = document.getElementById('ordCount');
  if (cnt) cnt.textContent = list.length === ORDERS.length
    ? '共 ' + ORDERS.length + ' 笔订单'
    : '筛选出 ' + list.length + ' / 共 ' + ORDERS.length + ' 笔';
}

function initCbx(cfg) {
  var root = document.getElementById(cfg.rootId);
  if (!root) return;
  var input = root.querySelector('.cbx-input');
  var pop = root.querySelector('.cbx-pop');
  var state = cfg.state;

  function labelOf(v) {
    for (var i = 0; i < cfg.items.length; i++) if (cfg.items[i].value === v) return cfg.items[i].label;
    return '';
  }
  function paint(kw) {
    var q = (kw || '').toLowerCase();
    var list = cfg.items.filter(function (it) { return !q || it.search.toLowerCase().indexOf(q) > -1; });
    pop.innerHTML = list.length ? list.map(function (it) {
      return '<button type="button" class="cbx-item' + (it.value === state.sel ? ' on' : '') + '" data-val="' + it.value + '">' + it.html + '</button>';
    }).join('') : '<div class="cbx-empty">无匹配项</div>';
  }
  function openPanel() { root.classList.add('open'); input.value = ''; paint(''); }
  function closePanel() {
    root.classList.remove('open');
    input.value = state.sel ? labelOf(state.sel) : (state.kw || '');
  }

  input.addEventListener('focus', openPanel);
  input.addEventListener('click', function () { if (!root.classList.contains('open')) openPanel(); });
  input.addEventListener('input', function () {
    state.sel = null;
    state.kw = input.value.trim();
    if (!root.classList.contains('open')) root.classList.add('open');
    paint(state.kw);
    cfg.onChange();
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closePanel(); input.blur(); }
    if (e.key === 'Enter') {
      e.preventDefault();
      var first = pop.querySelector('.cbx-item');
      if (first) first.click();
    }
  });
  pop.addEventListener('mousedown', function (e) { e.preventDefault(); });
  pop.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.cbx-item') : null;
    if (!b) return;
    var v = b.getAttribute('data-val');
    state.sel = v ? v : null;
    state.kw = '';
    closePanel();
    cfg.onChange();
  });
  document.addEventListener('click', function (e) { if (!root.contains(e.target)) closePanel(); });
}

/* ==================== 通用小工具（各表复用） ==================== */
function dtCell(v) {
  if (!v) return '<span class="d-none">—</span>';
  var p = String(v).split(' ');
  return p.length > 1 ? p[0] + '<span>' + p[1] + '</span>' : p[0];
}
function acctBadge(level) {
  return (level !== 'free' && MBADGE_SHORT[level])
    ? '<span class="m-badge m-' + level + '">' + MBADGE_SHORT[level] + '</span>' : '';
}
function acctCbxItems(allLabel, list) {
  var items = [{ value: '', label: allLabel, search: allLabel,
    html: allLabel + '<span class="cbx-n">' + list.length + '</span>' }];
  list.forEach(function (a) {
    items.push({
      value: a.id, label: a.id, search: a.id + ' ' + a.name,
      html: '<span class="cbx-mono">' + a.id + '</span><span class="cbx-name">' + a.name + '</span>' + acctBadge(a.level)
    });
  });
  return items;
}
function optCbxItems(allLabel, total, list) {
  var items = [{ value: '', label: allLabel, search: allLabel,
    html: allLabel + '<span class="cbx-n">' + total + '</span>' }];
  list.forEach(function (o) {
    items.push({ value: o.v, label: o.label, search: o.v + ' ' + (o.s || ''),
      html: o.label + '<span class="cbx-n">' + o.n + '</span>' });
  });
  return items;
}

/* ==================== 积分记录数据（JS 渲染，支持账号 / 类型筛选） ==================== */
var POINTS = [
  { time:'2026-11-12 08:41', acct:'15650132296', type:'消耗', delta:-20,   bal:'8,420', desc:'标讯详情导出' },
  { time:'2026-11-11 19:22', acct:'wangyan_bd',   type:'消耗', delta:-60,   bal:'8,440', desc:'企业监控报告生成' },
  { time:'2026-11-08 10:12', acct:'15650132296', type:'充值', delta:5000,  bal:'8,500', desc:'在线开通会员赠送' },
  { time:'2026-11-05 14:06', acct:'chent_zb',     type:'消耗', delta:-120,  bal:'3,500', desc:'批量标讯下载（40 条）' },
  { time:'2026-11-01 00:00', acct:'15650132296', type:'发放', delta:800,   bal:'3,620', desc:'VIP 月度积分发放' }
];
var PTS_TYPES = ['消耗', '充值', '发放'];
var PTS_F = { acct: { sel: null, kw: '' }, type: { sel: null, kw: '' } };

function ptsMatch(p) {
  if (PTS_F.acct.sel) { if (p.acct !== PTS_F.acct.sel) return false; }
  else if (PTS_F.acct.kw) {
    var a = ACCT_MAP[p.acct];
    var hay = (p.acct + ' ' + (a ? a.name : '') + ' ' + p.desc).toLowerCase();
    if (hay.indexOf(PTS_F.acct.kw.toLowerCase()) < 0) return false;
  }
  if (PTS_F.type.sel) { if (p.type !== PTS_F.type.sel) return false; }
  else if (PTS_F.type.kw && p.type.indexOf(PTS_F.type.kw) < 0) return false;
  return true;
}

function renderPoints() {
  var tb = document.getElementById('ptsTbody');
  if (!tb) return;
  var list = POINTS.filter(ptsMatch);
  tb.innerHTML = list.length ? list.map(function (p) {
    return '<tr>'
      + '<td class="dtime">' + dtCell(p.time) + '</td>'
      + '<td>' + ordAcctCell({ acct: p.acct }) + '</td>'
      + '<td class="d-type">' + p.type + '</td>'
      + '<td class="d-amt ' + (p.delta > 0 ? 'plus' : 'minus') + '">' + (p.delta > 0 ? '+' : '') + p.delta.toLocaleString('en-US') + '</td>'
      + '<td class="num">' + p.bal + '</td>'
      + '<td class="d-desc">' + p.desc + '</td>'
      + '</tr>';
  }).join('') : '<tr><td colspan="6" class="d-empty">没有符合条件的积分记录</td></tr>';
  var c = document.getElementById('ptsCount');
  if (c) c.textContent = list.length === POINTS.length
    ? '共 ' + POINTS.length + ' 条积分记录'
    : '筛选出 ' + list.length + ' / 共 ' + POINTS.length + ' 条';
}

/* ==================== 功能使用记录（JS 渲染，支持账号 / 终端筛选） ==================== */
var USAGE = [
  { acct:'15650132296', s1:42,  s2:18, s3:9,  s4:6,  term:'APP',    last:'2026-11-12 08:41' },
  { acct:'chent_zb',    s1:286, s2:4,  s3:12, s4:3,  term:'APP',    last:'2026-11-09 17:20' },
  { acct:'wangyan_bd',  s1:97,  s2:26, s3:5,  s4:11, term:'小程序', last:'2026-11-11 19:22' },
  { acct:'sunqiang_app',s1:31,  s2:3,  s3:0,  s4:2,  term:'APP',    last:'2026-11-12 07:58' },
  { acct:'tanwei888',   s1:6,   s2:0,  s3:0,  s4:0,  term:'小程序', last:'2026-10-21 10:03' },
  { acct:'zhoumin_guest', s1:2, s2:0,  s3:0,  s4:0,  term:'公众号', last:'2026-09-02 15:11' }
];
var USE_TERMS = ['APP', '小程序', '公众号'];
var USE_F = { acct: { sel: null, kw: '' }, term: { sel: null, kw: '' } };

function useMatch(u) {
  if (USE_F.acct.sel) { if (u.acct !== USE_F.acct.sel) return false; }
  else if (USE_F.acct.kw) {
    var a = ACCT_MAP[u.acct];
    var hay = (u.acct + ' ' + (a ? a.name : '')).toLowerCase();
    if (hay.indexOf(USE_F.acct.kw.toLowerCase()) < 0) return false;
  }
  if (USE_F.term.sel) { if (u.term !== USE_F.term.sel) return false; }
  else if (USE_F.term.kw && u.term.indexOf(USE_F.term.kw) < 0) return false;
  return true;
}

function numCell(n) {
  return n ? '<span class="num">' + n + '</span>' : '<span class="d-none">0</span>';
}

function renderUsage() {
  var tb = document.getElementById('usageTbody');
  if (!tb) return;
  var list = USAGE.filter(useMatch);
  tb.innerHTML = list.length ? list.map(function (u) {
    return '<tr>'
      + '<td>' + ordAcctCell({ acct: u.acct }) + '</td>'
      + '<td>' + numCell(u.s1) + '</td>'
      + '<td>' + numCell(u.s2) + '</td>'
      + '<td>' + numCell(u.s3) + '</td>'
      + '<td>' + numCell(u.s4) + '</td>'
      + '<td class="d-term">' + u.term + '</td>'
      + '<td class="dtime">' + dtCell(u.last) + '</td>'
      + '</tr>';
  }).join('') : '<tr><td colspan="7" class="d-empty">没有符合条件的使用记录</td></tr>';
  var c = document.getElementById('usageCount');
  if (c) c.textContent = list.length === USAGE.length
    ? '共 ' + USAGE.length + ' 个账户'
    : '筛选出 ' + list.length + ' / 共 ' + USAGE.length + ' 个账户';
}

/* ==================== 各页签筛选条初始化 ==================== */
(function buildFilters() {
  /* ---- 会员状态：会员类型 / 状态 ---- */
  var lvlCount = {};
  ACCTS.forEach(function (a) { lvlCount[a.level] = (lvlCount[a.level] || 0) + 1; });
  var lvlList = MEM_LEVELS.filter(function (l) { return lvlCount[l.v]; })
    .map(function (l) { return { v: l.v, label: l.t, s: l.t, n: lvlCount[l.v] }; });
  initCbx({ rootId: 'cbxMemLevel', items: optCbxItems('全部会员类型', ACCTS.length, lvlList), state: MEM_F.level, onChange: renderMembers });

  var stCount = {};
  ACCTS.forEach(function (a) { stCount[a.status] = (stCount[a.status] || 0) + 1; });
  var stList = MEM_STATUS.filter(function (s) { return stCount[s]; })
    .map(function (s) { return { v: s, label: s, s: s, n: stCount[s] }; });
  initCbx({ rootId: 'cbxMemStatus', items: optCbxItems('全部状态', ACCTS.length, stList), state: MEM_F.status, onChange: renderMembers });

  /* ---- 订单：支付状态 / 账号 ---- */
  var payItems = [{ value: '', label: '全部支付状态', search: '全部支付状态',
    html: '全部支付状态<span class="cbx-n">' + ORDERS.length + '</span>' }];
  PAY_STATES.forEach(function (p) {
    var n = ORDERS.filter(function (o) { return o.pay === p; }).length;
    payItems.push({ value: p, label: p, search: p, html: p + '<span class="cbx-n">' + n + '</span>' });
  });
  initCbx({ rootId: 'cbxPay', items: payItems, state: ORD_F.pay, onChange: renderOrders });
  initCbx({ rootId: 'cbxAcct', items: acctCbxItems('全部账号', ACCTS), state: ORD_F.acct, onChange: renderOrders });

  /* ---- 积分记录：账号 / 类型 ---- */
  var ptsAccts = ACCTS.filter(function (a) {
    return POINTS.some(function (p) { return p.acct === a.id; });
  });
  initCbx({ rootId: 'cbxPtsAcct', items: acctCbxItems('全部账号', ptsAccts), state: PTS_F.acct, onChange: renderPoints });
  var ptTypeList = PTS_TYPES.map(function (t) {
    return { v: t, label: t, s: t, n: POINTS.filter(function (p) { return p.type === t; }).length };
  });
  initCbx({ rootId: 'cbxPtsType', items: optCbxItems('全部类型', POINTS.length, ptTypeList), state: PTS_F.type, onChange: renderPoints });

  /* ---- 功能使用记录：账号 / 终端 ---- */
  var useAccts = ACCTS.filter(function (a) {
    return USAGE.some(function (u) { return u.acct === a.id; });
  });
  initCbx({ rootId: 'cbxUseAcct', items: acctCbxItems('全部账号', useAccts), state: USE_F.acct, onChange: renderUsage });
  var termList = USE_TERMS.map(function (t) {
    return { v: t, label: t, s: t, n: USAGE.filter(function (u) { return u.term === t; }).length };
  });
  initCbx({ rootId: 'cbxUseTerm', items: optCbxItems('全部终端', USAGE.length, termList), state: USE_F.term, onChange: renderUsage });

  renderMembers();
  renderOrders();
  renderPoints();
  renderUsage();
})();

/* ==================== 页签导航（拆页版：每个页签一个独立页面，点击为链接跳转） ====================
   原单页内的 tab 切换与 solo-col / on-contacts 状态，已改为在各自 html 的 .two-col 上静态声明，
   此处只负责进入页面后的初始化：回到顶部 + 「账户与联系人」页的高度自适应。 */
(function initPage() {
  var cb = document.getElementById('contentBody');
  if (cb) cb.scrollTop = 0;
  if (document.getElementById('pane-contacts')) {
    setTimeout(function () { if (typeof ctFitHeight === 'function') ctFitHeight(); }, 0);
    window.addEventListener('load', function () { if (typeof ctFitHeight === 'function') ctFitHeight(); });
  }
})();


/* ==================== Toast ==================== */
var toastTimer = null;
function toast(msg) {
  var t = document.getElementById('navToast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1800);
}

/* ==================== 订单「查看」 ==================== */
document.addEventListener('click', function (e) {
  var btn = e.target.closest ? e.target.closest('.op-link') : null;
  if (!btn) return;
  var tr = btn.closest('tr');
  var no = tr ? tr.children[2].innerText.trim() : '';
  toast('订单 ' + no + ' · ' + btn.innerText.trim() + '（待接入）');
});

/* ==================== 侧栏桥接（独立版式：无 sidebarFrame 时自动降级） ==================== */
var shell = document.getElementById('appShell');
var frame = document.getElementById('sidebarFrame');
var initSent = false;
var LS_KEY = 'crm-sidebar-collapsed';

function postToSidebar(msg) {
  if (!frame || !frame.contentWindow) return;
  msg.source = 'crm-main';
  frame.contentWindow.postMessage(msg, '*');
}

function pushInit() {
  if (!frame || initSent) return;
  initSent = true;
  var collapsed = localStorage.getItem(LS_KEY) === '1';
  setCollapsed(collapsed, false);
  postToSidebar({ type: 'init', key: 'cust-detail' });
  postToSidebar({ type: 'activate', key: 'cust-detail' });
}

function setCollapsed(on, persist) {
  if (!shell) return;
  shell.setAttribute('data-sidebar', on ? 'collapsed' : 'expanded');
  document.body.classList.toggle('sb-collapsed', on);
  if (persist) localStorage.setItem(LS_KEY, on ? '1' : '0');
}

var sidebarTriggerEl = document.getElementById('sidebarTrigger');
if (sidebarTriggerEl) sidebarTriggerEl.addEventListener('click', function () {
  if (!frame) { toast('原型演示：当前为独立版式，未挂载侧栏'); return; }
  var next = shell.getAttribute('data-sidebar') !== 'collapsed';
  setCollapsed(next, true);
  postToSidebar({ type: 'collapsed', value: next });
});

window.addEventListener('message', function (e) {
  var d = e.data;
  if (!d || d.source !== 'crm-sidebar') return;
  if (d.type === 'collapsed') {
    setCollapsed(!!d.value, true);
  } else if (d.type === 'nav') {
    if (d.key && d.key !== 'cust-detail') {
      toast('原型演示：已点击「' + (d.parent ? d.parent + ' / ' : '') + (d.title || '') + '」，实际将跳转对应工作台');
    }
  } else if (d.type === 'toast') {
    toast(d.text || '');
  }
});

if (frame) {
  frame.addEventListener('load', pushInit);
  setTimeout(pushInit, 400);
}

/* ==================== 其他按钮 ==================== */
document.getElementById('btnRefresh').addEventListener('click', function () { toast('已刷新客户数据'); });
document.getElementById('btnFullscreen').addEventListener('click', function () {
  if (!document.fullscreenElement) { document.documentElement.requestFullscreen(); }
  else { document.exitFullscreen(); }
});
document.getElementById('btnNewLead').addEventListener('click', function () { toast('原型演示：打开新建线索面板'); });
[].forEach.call(document.querySelectorAll('.top-quick-btn'), function (b) {
  b.addEventListener('click', function () { toast('原型演示：' + b.dataset.quick); });
});
[].forEach.call(document.querySelectorAll('.actions-row .btn'), function (b) {
  b.addEventListener('click', function () { toast('原型演示：' + b.textContent.trim()); });
});
/* ==================== 联系人 tab（左右布局） ==================== */
var CT_SVG_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 10.8V4h6v6.8l2.6 2.9a1 1 0 0 1-.75 1.66H7.15a1 1 0 0 1-.75-1.66L9 10.8Z"/></svg>';
var CT_SVG_EDIT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';

var CONTACTS = [
  { id:'c1', name:'林国栋', phone:'13800008801', act:'查看信息', actAt:'2026-11-12', raw:'13800008801', dept:'董事长办公室', title:'董事长', tags:['决策人','已开通APP'], primary:true,
    wechat:'linguodong_bd', email:'lingd@datudou.cn', acct:'15650132296（主账号 · VIP 会员 · 生效中）',
    lastContact:'2026-11-05 · 电话 12 分钟', lastAt:'2026-11-05',
    note:'年度框架签约人，关注集团多子公司统一管理；续签决策由其拍板，需同步法务与财务。',
    logs:[
      { date:'2026-11-05', way:'电话', text:'沟通年度框架续签，确认年内续签并扩容至 15 个席位；要求提供集团多主体管理方案。', next:'下一步：11-20 前发送扩容报价单' },
      { date:'2026-10-22', way:'上门', text:'到访交流招标数据在集团层面的应用，对企情分析模块兴趣较高。' },
      { date:'2026-09-18', way:'微信', text:'询问子账号权限与数据导出限制，已同步产品说明文档。' }
    ] },
  { id:'c2', name:'王燕', phone:'13800006612', act:'搜索', actAt:'2026-11-13', raw:'13800006612', dept:'招投标部', title:'部门经理', tags:['主联系人'], primary:true,
    wechat:'wangyan_bd', email:'wangyan@datudou.cn', acct:'wangyan_bd（Plus 会员 · 2026-12-31 到期）',
    lastContact:'2026-11-11 · 微信 6 分钟', lastAt:'2026-11-11',
    note:'日常对接人，负责账号使用与培训；每月例会由其组织，关注标书检索效率。',
    logs:[
      { date:'2026-11-11', way:'微信', text:'反馈标书检索结果偏多，希望增加按采购单位过滤；已记录为需求。', next:'下一步：11-18 前给出需求评估' },
      { date:'2026-10-28', way:'会议', text:'线上月度例会，讲解新增订阅规则与关键词组合技巧。' },
      { date:'2026-10-09', way:'电话', text:'咨询 3 个子账号到期时间与续费方式。' }
    ] },
  { id:'c3', name:'陈涛', phone:'13900003308', act:'下载标讯', actAt:'2026-11-11', raw:'13900003308', dept:'招投标部', title:'标书专员', tags:['高频使用'],
    wechat:'chentao_zb', email:'chentao@datudou.cn', acct:'chent_zb（标准会员 · 2026-11-30 到期）',
    lastContact:'2026-11-09 · APP 登录', lastAt:'2026-11-09',
    note:'标准会员将于 11-30 到期，使用强度高（近 30 天导出 42 次），是最优先续费转化对象。',
    logs:[
      { date:'2026-11-09', way:'APP', text:'连续 3 天高频检索并导出标书，已触达导出上限。', next:'下一步：11-25 前完成续费触达' },
      { date:'2026-10-30', way:'电话', text:'询问导出次数上限与升级高级会员的差价。' }
    ] },
  { id:'c4', name:'李芳', phone:'13700009902', act:'查看信息', actAt:'2026-11-10', raw:'13700009902', dept:'财务部', title:'财务主管', tags:['付款方'],
    wechat:'lifang_fin', email:'lifang@datudou.cn', acct:'lifang_fin（免费账户 · 原高级会员 2026-12-08 已到期）',
    lastContact:'2026-10-30 · 电话 4 分钟', lastAt:'2026-10-30',
    note:'负责开票与对账，发票抬头固定；每年 12 月集中采购，需提前 2 周对账。',
    logs:[
      { date:'2026-10-30', way:'电话', text:'确认 11 月发票开具与账户到期对账流程。' },
      { date:'2026-09-26', way:'邮件', text:'发送年度服务清单与结算明细，已回签确认。' }
    ] },
  { id:'c5', name:'孙强', phone:'13500004417', act:'查看企业监控', actAt:'2026-11-12', raw:'13500004417', dept:'信息部', title:'IT 负责人', tags:['技术对接'],
    wechat:'sunqiang_app', email:'sunqiang@datudou.cn', acct:'sunqiang_app（移动端高级 · 生效中）',
    lastContact:'2026-10-16 · 微信 9 分钟', lastAt:'2026-10-16',
    note:'技术与数据对接窗口，关注 API 接口稳定性；集团系统集成由其评估。',
    logs:[
      { date:'2026-10-16', way:'微信', text:'沟通 API 调用频次限制，反馈希望提供批量查询接口。' },
      { date:'2026-09-08', way:'会议', text:'技术评审会，确认数据字段口径与接口鉴权方式。' }
    ] },
  { id:'c6', name:'王海', phone:'13900005527', act:'咨询', actAt:'2026-11-12', raw:'13900005527', dept:'采购部', title:'采购经理', tags:['决策人','新线索'],
    wechat:'', email:'wanghai@datudou.cn', acct:'',
    lastContact:'2026-11-12 · 上门 20 分钟', lastAt:'2026-11-12',
    note:'展会现场拜访获取，负责集团采购寻源；尚未注册平台账号，已同意接收注册邀请。',
    logs:[
      { date:'2026-11-12', way:'上门', text:'展会现场交流，对招投标信息与企情分析有需求；尚未使用平台，留资待注册。', next:'下一步：11-20 前完成注册引导' }
    ] },
  { id:'c7', name:'郑晓', phone:'137****6618', raw:'13700006618', dept:'行政部', title:'行政专员', tags:['待激活'],
    wechat:'', email:'zhengxiao@datudou.cn', acct:'',
    lastContact:'—', lastAt:'',
    note:'官网咨询表单留资，仅确认办公用品采购，暂无标讯类需求，待二次触达。',
    logs:[] }
];

var CT_PIN_KEY = 'crm-contact-pinned';
var ctPinned = [];
try { ctPinned = JSON.parse(localStorage.getItem(CT_PIN_KEY) || '[]') || []; } catch (e) { ctPinned = []; }
var ctCurKey = 'a:15650132296';
var ctFilterMode = 'all';
var ctDrawerMode = '', ctDrawerKey = '', ctDraftTags = [], ctDrawerAcctLock = '';

function ctEsc(t) {
  return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
function ctMask(p) { return String(p || '').replace(/\s/g, ''); }  /* 不脱敏：显示完整号码 */
function ctInitial(n) { return n ? n.charAt(0) : '?'; }

/* ---------- 电话号码可点击 · 拨号平台选择 ---------- */
function ctDigits(t) { return String(t == null ? '' : t).replace(/[^\d]/g, ''); }
function ctTelHtml(txt, name) {
  var d = String(txt == null ? '' : txt).trim();
  var raw = ctDigits(d);
  if (!d || d === '—' || d.indexOf('*') >= 0 || raw.length < 7) return ctEsc(d || '—');
  return '<a class="ct-tel" href="javascript:;" data-tel="' + ctEsc(raw) + '" data-shown="' + ctEsc(d)
    + '" data-who="' + ctEsc(name || '') + '" title="点击选择拨打平台">' + ctEsc(d) + '</a>';
}
function ctSecurePhone(a) {
  /* 密保手机只存在于付费账户，缺失时返回空串由调用方渲染占位，不再用登录账号兜底 */
  var v = a && a.secure ? String(a.secure) : '';
  if (!v) return '';
  if (v.length === 11) return v.slice(0, 3) + '****' + v.slice(7);
  return v;
}
var CT_DIAL_PLATFORMS = [
  { label: '拨号（本机）', way: '本机拨号', pri: 1 },
  { label: '回访（数企）', way: '数企' },
  { label: '回访（中普云）', way: '中普云' },
  { label: '回访（仟客）', way: '仟客' }
];
function ctDialPopEl() { return document.getElementById('ctDialPop'); }
function ctCloseDialPop() {
  var el = ctDialPopEl();
  if (!el) return;
  el.classList.remove('on');
  el.innerHTML = '';
  el.removeAttribute('data-tel');
}
function ctOpenDialPop(anchorEl) {
  var el = ctDialPopEl();
  if (!el) return;
  var tel = anchorEl.getAttribute('data-tel') || '';
  var shown = anchorEl.getAttribute('data-shown') || tel;
  var who = anchorEl.getAttribute('data-who') || '';
  el.innerHTML = '<div class="dp-top">选择拨打平台' + (who ? ' · ' + ctEsc(who) : '') + '</div>'
    + '<div class="dp-num">' + ctEsc(shown) + '</div>'
    + '<div class="dp-grid">' + CT_DIAL_PLATFORMS.map(function (x) {
        return '<button class="ct-dial-item' + (x.pri ? ' pri' : '') + '" type="button" data-way="'
          + ctEsc(x.way) + '">' + ctEsc(x.label) + '</button>';
      }).join('') + '</div>'
    + '<div class="dp-foot">'
    +   '<button class="ct-dial-item" type="button" data-way="__sms">发短信</button>'
    +   '<button class="ct-dial-item" type="button" data-way="__rec">录音记录</button>'
    + '</div>';
  el.setAttribute('data-tel', tel);
  el.classList.add('on');
  var r = anchorEl.getBoundingClientRect(), w = el.offsetWidth, h = el.offsetHeight;
  var left = Math.min(Math.max(8, r.left), window.innerWidth - w - 8);
  var top = r.bottom + 6;
  if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 6);
  el.style.left = left + 'px';
  el.style.top = top + 'px';
}
function ctToday() {
  var d = new Date(), m = d.getMonth() + 1, day = d.getDate();
  return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
}
function ctIsPin(k) { return ctPinned.indexOf(k) >= 0; }
function ctSavePins() { try { localStorage.setItem(CT_PIN_KEY, JSON.stringify(ctPinned)); } catch (e) {} }

/* ---------- 合并数据：账户为主，挂联系人档案 ---------- */
function ctProfileOfAcct(a) {
  for (var i = 0; i < CONTACTS.length; i++) {
    var c = CONTACTS[i];
    if (c.acct && String(c.acct).split('（')[0].trim() === a.id) return c;
  }
  return null;
}
function ctAcctOfProfile(c) {
  if (!c || !c.acct) return null;
  var id = String(c.acct).split('（')[0].trim();
  for (var i = 0; i < ACCTS.length; i++) { if (ACCTS[i].id === id) return ACCTS[i]; }
  return null;
}
function ctMakeUnit(a, p) {
  var dept = '', title = '';
  if (p) { dept = p.dept; title = p.title; }
  else if (a) { var sp = String(a.dept).split(' / '); dept = sp[0] || '待补充'; title = sp[1] || '—'; }
  return {
    key: a ? 'a:' + a.id : 'c:' + p.id,
    kind: a ? 'acct' : 'contact',
    a: a || null,
    p: p || null,
    name: (p && p.name) || (a && a.name) || '',
    dept: dept, title: title,
    phone: p ? p.phone : '', raw: p ? p.raw : '',
    wechat: p ? p.wechat : '', email: p ? p.email : '',
    tags: p ? (p.tags || []) : [], primary: p ? !!p.primary : false,
    acctId: a ? a.id : '', acctNo: a ? (a.aid || '') : '', lvlText: a ? a.levelText : '', lvl: a ? a.level : '', lvlFree: a ? a.level === 'free' : false,
    status: a ? a.status : '', days: a ? a.days : 0, reg: a ? a.reg : '', last: a ? a.last : '',
    terminal: a ? a.terminal : '', spend: a ? a.spend : '', expire: a ? a.expire : '', svc: a ? a.svc : null,
    logs: p ? (p.logs || []) : [], lastAt: p ? (p.lastAt || '') : '',
    lastContact: p ? (p.lastContact || '') : '', note: p ? (p.note || '') : '',
    act: (p && p.act) || (a && a.act) || '',
    actAt: (p && p.actAt) || (a && a.actAt) || ((a && a.last && a.last !== '从未登录') ? a.last.slice(0, 10) : '')
  };
}
function ctUnits() {
  var out = [], seen = {};
  ACCTS.forEach(function (a) {
    var p = ctProfileOfAcct(a);
    if (p) seen[p.id] = 1;
    out.push(ctMakeUnit(a, p));
  });
  CONTACTS.forEach(function (c) {
    if (seen[c.id]) return;
    if (ctAcctOfProfile(c)) return;
    out.push(ctMakeUnit(null, c));
  });
  return out;
}
function ctFindUnit(key) {
  var arr = ctUnits();
  for (var i = 0; i < arr.length; i++) { if (arr[i].key === key) return arr[i]; }
  return null;
}
function ctCounts() {
  var arr = ctUnits(), total = arr.length, acctN = 0;
  arr.forEach(function (u) { if (u.kind === 'acct') acctN++; });
  var ctN = total - acctN;
  var box = document.getElementById('ctCount'), tab = document.getElementById('tabContactCnt');
  if (box) box.textContent = total;
  if (tab) tab.textContent = total;
  var n1 = document.getElementById('ctN1'), n2 = document.getElementById('ctN2'), n3 = document.getElementById('ctN3');
  if (n1) n1.textContent = total;
  if (n2) n2.textContent = acctN;
  if (n3) n3.textContent = ctN;
}

/* ---------- 左栏列表 ---------- */
/* 客户最近行为：红色底色标签，2026.11.12 查看信息 */
function ctActHtml(u) {
  var act = String(u.act || '').trim();
  if (!act) return '<div class="ct-act-wrap"><span class="ct-time">暂无操作记录</span></div>';
  var at = String(u.actAt || '').trim(), m = at.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  var ds = m ? (m[1] + '.' + m[2] + '.' + m[3]) : at;
  return '<div class="ct-act-wrap"><span class="ct-act" title="最近行为：' + ctEsc(ds + ' ' + act) + '">'
    + '<span class="ct-act-d">' + ctEsc(ds) + '</span>'
    + '<span class="ct-act-t">' + ctEsc(act) + '</span>'
    + '</span></div>';
}
function ctItemHtml(u) {
  var pinned = ctIsPin(u.key);
  var phoneTxt = u.phone || u.acctId || '—';
  return '<div class="ct-item' + (u.key === ctCurKey ? ' active' : '') + (pinned ? ' pinned' : '') + (u.kind === 'contact' ? ' unreg' : '') + '" data-ct="' + u.key + '">'
    + '<div class="ct-ava">' + ctEsc(ctInitial(u.name)) + '</div>'
    + '<div class="ct-main">'
    +   '<div class="ct-line1"><span class="ct-name">' + ctEsc(u.name) + '</span>'
    +     (u.kind === 'contact' ? '<span class="ct-tag unreg">未注册</span>' : '')
    +     '<span class="ct-phone">' + ctEsc(phoneTxt) + '</span></div>'
    +   ctActHtml(u)
    + '</div>'
    + '<button class="ct-pin' + (pinned ? ' on' : '') + '" type="button" data-pin="' + u.key + '" title="' + (pinned ? '取消置顶' : '置顶') + '">' + CT_SVG_PIN + '</button>'
    + '</div>';
}
function ctRenderList() {
  var box = document.getElementById('ctList');
  if (!box) return;
  var kw = (document.getElementById('ctSearch').value || '').trim().toLowerCase();
  var arr = ctUnits().filter(function (u) {
    if (ctFilterMode === 'acct' && u.kind !== 'acct') return false;
    if (ctFilterMode === 'contact' && u.kind !== 'contact') return false;
    if (!kw) return true;
    var hay = [u.name, u.phone, u.raw, u.acctId, u.dept, u.title, u.wechat, u.email, (u.tags || []).join(''), u.lvlText].join('').toLowerCase();
    return hay.indexOf(kw) >= 0;
  });
  var curSwitched = false;
  if (arr.length && !arr.some(function (u) { return u.key === ctCurKey; })) { ctCurKey = arr[0].key; curSwitched = true; }
  var pinArr = [], rest = [];
  arr.forEach(function (u) { (ctIsPin(u.key) ? pinArr : rest).push(u); });
  pinArr.sort(function (a, b) { return ctPinned.indexOf(a.key) - ctPinned.indexOf(b.key); });
  rest.sort(function (a, b) { return String(b.lastAt || '').localeCompare(String(a.lastAt || '')); });

  var html = '';
  if (pinArr.length) {
    html += '<div class="cs-group"></div>' + pinArr.map(ctItemHtml).join('');
    if (rest.length) html += '<div class="cs-group"></div>';
  }
  html += rest.map(ctItemHtml).join('');
  if (!html) html = '<div class="ct-empty">没有匹配的账户或联系人</div>';
  box.innerHTML = html;
  ctCounts();
  if (curSwitched) ctRenderDetail();
  ctFitHeight();
}

/* ---------- 通讯录 / 客户信息高度自适应铺满 ---------- */
function ctFitHeight() {
  var split = document.querySelector('.contact-split');
  var pane = document.getElementById('pane-contacts');
  if (!split || !pane) return;
  if (!pane.classList.contains('active') || pane.offsetParent === null) return;
  var cb = document.getElementById('contentBody');
  var limit = cb ? cb.getBoundingClientRect().bottom : window.innerHeight;
  var top = split.getBoundingClientRect().top;
  var h = Math.round(limit - top - 16);
  if (h > 0) split.style.height = Math.max(420, h) + 'px';
}

/* ---------- 右栏详情 ---------- */
function ctAcctBoxHtml(u) {
  var a0 = u.a;
  var nameTxt = ctEsc(u.name || '—');
  var regPhoneTxt = (a0 && a0.rphone) ? ctTelHtml(a0.rphone, u.name) : '<span class="ct-na">未留手机号</span>';
  var contactPhoneTxt = ctTelHtml(u.phone || (a0 && a0.phone) || '—', u.name);
  var secVal = a0 ? ctSecurePhone(a0) : '';
  var secureTxt = secVal ? ctEsc(secVal) : '<span class="ct-na">—</span>';
  var svcHtml = '<div class="ct-acct-svc">'
    + '<div class="svc-label">平台绑定状态 <span class="hint">公众号关注 / 绑定与 APP、小程序登录情况</span></div>'
    + '<div class="svc-row">'
    +   svcChip('标讯助手公众号', a0 ? a0.svc.assist : '', '已关注', '未关注')
    +   svcChip('会员服务公众号', a0 ? a0.svc.member : '', '已绑定', '未绑定')
    +   svcChip('APP', a0 ? a0.svc.app : '', '已登录', '未登录', 'app')
    +   svcChip('小程序', a0 ? a0.svc.mini : '', '已登录', '未登录', 'app')
    + '</div>'
    + '</div>';
  if (!a0) {
    return '<div class="ct-acct-box">'
      + '<div class="ct-acct-head">平台账户信息'
      +   '<span class="cnt" style="background:#f0f2f5;color:#8a93a3">未注册</span>'
      +   '<span class="ml-auto ct-unreg-flag">未注册平台账号</span>'
      + '</div>'
      + '<div class="ct-acct-grid">'
      +   '<div class="ct-acct-grp">账号信息</div>'
      +   '<div class="ct-acct-cell span2"><span class="k">账户名称</span><span class="v">' + nameTxt + '</span></div>'
      +   '<div class="ct-acct-cell span2"><span class="k">联系电话</span><span class="v mono">' + contactPhoneTxt + '</span></div>'
      + '</div>'
      + '<div class="ct-acct-none"><span class="ct-unreg-flag">该联系人尚未注册平台账号，暂无会员与绑定信息</span>'
      + '<button class="ct-invite" type="button" id="btnInvite">发送注册邀请</button></div>'
      + svcHtml;
  }
  var a = a0;
  var statTag = u.lvlFree ? '<span class="tag">免费未开通</span>'
    : (u.status === '即将到期' ? '<span class="tag tag-danger">' + u.days + ' 天后到期</span>'
    : '<span class="tag tag-success">' + ctEsc(u.status) + '</span>');
  var expireTxt = u.expire ? u.expire + (u.days ? '（剩 ' + u.days + ' 天）' : '') : '未开通';
  /* 13 项按功能分三组：账号信息 / 会员与付费 / 注册与活跃 */
  return '<div class="ct-acct-box">'
    + '<div class="ct-acct-head">平台账户信息'
    +   '<span class="cnt mono">' + ctEsc(u.acctNo || '—') + '</span>'
    +   '<span class="m-badge m-' + ctEsc(u.lvl) + '" style="margin-left:2px">' + ctEsc(u.lvlText) + '</span>'
    +   '<span class="ml-auto">' + statTag + '</span>'
    + '</div>'
    + '<div class="ct-acct-grid">'
    +   '<div class="ct-acct-grp">账号信息</div>'
    +   '<div class="ct-acct-cell span2"><span class="k">账户名称</span><span class="v">' + nameTxt + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">账户 ID</span><span class="v mono">' + ctEsc(u.acctNo || '—') + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">登录账号</span><span class="v mono">' + ctEsc(u.acctId || '—') + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">注册手机号</span><span class="v mono">' + regPhoneTxt + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">密保手机</span><span class="v mono">' + secureTxt + '</span></div>'
    +   '<div class="ct-acct-grp">会员与付费</div>'
    +   '<div class="ct-acct-cell"><span class="k">会员类型</span><span class="v">' + ctEsc(u.lvlText) + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">账户状态</span><span class="v">' + ctEsc(u.status || '—') + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">会员到期</span><span class="v">' + ctEsc(expireTxt) + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">累计消费</span><span class="v">' + ctEsc(u.spend || '—') + '</span></div>'
    +   '<div class="ct-acct-grp">注册与活跃</div>'
    +   '<div class="ct-acct-cell"><span class="k">注册时间</span><span class="v">' + ctEsc(u.reg || '—') + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">最近登录</span><span class="v">' + ctEsc(u.last || '—') + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">进入终端</span><span class="v">' + ctEsc(u.terminal || '—') + '</span></div>'
    +   '<div class="ct-acct-cell"><span class="k">联系电话</span><span class="v mono">' + contactPhoneTxt + '</span></div>'
    + '</div>'
    + svcHtml;
}

  function ctDetailHtml(u) {
  if (!u) return '<div class="ct-placeholder">选择左侧账户或联系人查看详情</div>';
  var tags = (u.tags || []).map(function (t) {
    return '<span class="ct-tag' + (u.primary ? ' primary' : '') + '">' + ctEsc(t) + '</span>';
  }).join('');
  var pinned = ctIsPin(u.key);
  var kindHtml = '<span class="ct-d-kind ' + (u.kind === 'acct' ? 'acct' : 'contact') + '">' + (u.kind === 'acct' ? '账户' : '联系人') + '</span>'
    + (u.kind === 'contact' ? '<span class="ct-d-reg off">未注册</span>' : '');
  var logs = (u.logs || []).map(function (g) {
    return '<div class="ct-log">'
      + '<div class="ct-log-top"><span>' + ctEsc(g.date) + '</span><span class="ct-log-way">' + ctEsc(g.way) + '</span></div>'
      + '<div class="ct-log-text">' + ctEsc(g.text) + '</div>'
      + (g.next ? '<div class="ct-log-next">' + ctEsc(g.next) + '</div>' : '')
      + '</div>';
  }).join('');

  return '<div class="ct-d-head">'
    + '<div class="ct-ava lg">' + ctEsc(ctInitial(u.name)) + '</div>'
    + '<div class="flex-1">'
    +   '<div class="ct-d-name">' + ctEsc(u.name) + tags + kindHtml + '</div>'
    +   '<div class="ct-d-sub">' + ctEsc(u.dept) + ' · ' + ctEsc(u.title) + '</div>'
    +   '<div class="ct-d-sub">' + ctTelHtml(u.phone || u.acctId || '—', u.name) + (u.email ? ' · ' + ctEsc(u.email) : '') + '</div>'
    + '</div>'
    + '<div class="ct-d-actions">'
    +   '<button class="ct-btn' + (pinned ? ' on' : '') + '" type="button" id="btnPinCur">' + CT_SVG_PIN + (pinned ? '已置顶' : '置顶') + '</button>'
    +   '<button class="ct-btn" type="button" id="btnEditCur">' + CT_SVG_EDIT + (u.p ? '编辑' : '补录联系人') + '</button>'
    + '</div>'
    + '</div>'
    + '<table class="kvt"><colgroup><col style="width:96px"><col></colgroup><tbody>'
    +   '<tr><th class="k">手机号</th><td class="v mono">' + ctTelHtml(u.phone || '—', u.name) + '</td></tr>'
    +   '<tr><th class="k">微信</th><td class="v">' + ctEsc(u.wechat || '—') + '</td></tr>'
    +   '<tr><th class="k">部门 / 职位</th><td class="v">' + ctEsc(u.dept) + ' · ' + ctEsc(u.title) + '</td></tr>'
    +   '<tr><th class="k">邮箱</th><td class="v">' + ctEsc(u.email || '—') + '</td></tr>'
    +   '<tr><th class="k">最近沟通</th><td class="v">' + ctEsc(u.lastContact || '—') + '</td></tr>'
    +   '<tr><th class="k">备注</th><td class="v">' + ctEsc(u.note || '—') + '</td></tr>'
    + '</tbody></table>'
    + ctAcctBoxHtml(u)
    + '<div class="ct-logs">'
    +   '<div class="ct-logs-head">联系记录 <span class="cnt">' + (u.logs || []).length + '</span></div>'
    +   (logs || '<div class="ct-empty">暂无联系记录</div>')
    + '</div>';
}
function ctRenderDetail() {
  var box = document.getElementById('ctDetail');
  if (!box) return;
  var u = ctFindUnit(ctCurKey);
  box.innerHTML = ctDetailHtml(u);
  var pinBtn = document.getElementById('btnPinCur');
  if (pinBtn) pinBtn.addEventListener('click', function () { ctTogglePin(ctCurKey); });
  var editBtn = document.getElementById('btnEditCur');
  if (editBtn) editBtn.addEventListener('click', function () { ctOpenDrawer('edit', ctCurKey); });
  var inviteBtn = document.getElementById('btnInvite');
  if (inviteBtn) inviteBtn.addEventListener('click', function () {
    toast('已向 ' + (u ? u.name : '联系人') + ' 发送注册邀请（短信 + 邮件）');
  });
}
function ctSelect(key) {
  ctCurKey = key;
  ctRenderList();
  ctRenderDetail();
  var right = document.getElementById('ctDetail');
  if (right) right.scrollTop = 0;
}
function ctTogglePin(key) {
  var i = ctPinned.indexOf(key);
  var u = ctFindUnit(key);
  if (i >= 0) { ctPinned.splice(i, 1); toast('已取消置顶' + (u ? '：' + u.name : '')); }
  else { ctPinned.unshift(key); toast('已置顶' + (u ? '：' + u.name : '')); }
  ctSavePins();
  ctRenderList();
  ctRenderDetail();
}

/* ---------- 抽屉 ---------- */
function ctOpenDrawer(mode, key) {
  var u = key ? ctFindUnit(key) : null;
  ctDrawerKey = key || '';
  ctDrawerAcctLock = '';
  var title = document.getElementById('ctDrawerTitle');
  var body = document.getElementById('ctDrawerBody');
  var foot = document.querySelector('#ctDrawer .drawer-foot');
  var p = u ? u.p : null;

  if (mode === 'note') {
    if (!p) { toast('该条目暂未建立联系人档案，请先点「补录联系人」'); return; }
    ctDrawerMode = 'note';
    title.textContent = '写联系小计' + (p ? '：' + p.name : '');
    body.innerHTML = '<div class="dr-label">小计内容<span class="req">*</span></div>'
      + '<textarea class="dr-area" id="drNote" placeholder="记录本次沟通要点、客户诉求与下一步动作，例：沟通年度续签，客户确认年内签约，要求扩容到 15 个席位。"></textarea>'
      + '<div class="dr-err" id="drErr">请先填写小计内容</div>'
      + '<div class="dr-label">记录方式</div>'
      + '<div class="dr-chips" id="drWays">'
      + ['电话','微信','上门','会议','邮件','手动记录'].map(function (w) {
          return '<button class="dr-chip" type="button" data-way="' + w + '">' + w + '</button>';
        }).join('')
      + '</div>'
      + '<div class="dr-label">下次跟进时间（选填）</div>'
      + '<input class="dr-input" id="drNext" type="date">';
    if (foot) foot.querySelector('#ctDrawerSave').textContent = '保存小计';
    var ways = document.getElementById('drWays');
    if (ways) {
      ways.addEventListener('click', function (e) {
        var b = e.target.closest('.dr-chip');
        if (!b) return;
        [].forEach.call(ways.querySelectorAll('.dr-chip'), function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
      [].forEach.call(ways.querySelectorAll('.dr-chip'), function (x, i) { if (i === 0) x.classList.add('on'); });
    }
  } else {
    var isEdit = mode === 'edit' && !!p;
    ctDrawerMode = isEdit ? 'edit' : 'add';
    if (!isEdit && u && u.a) ctDrawerAcctLock = u.acctId;   // 纯账户条目：补录联系人档
    title.textContent = isEdit ? '编辑联系人' : (ctDrawerAcctLock ? '补录联系人：' + (u ? u.name : '') : '添加联系人');
    var v = p || (u && u.a ? { name: u.name, dept: u.dept, title: u.title, raw: '', wechat: '', email: '', tags: [], note: '' } : {});
    ctDraftTags = (v.tags || []).slice();
    var opts = ACCTS.map(function (a) {
      var selVal = ctDrawerAcctLock || (p && p.acct ? String(p.acct).split('（')[0].trim() : '');
      var sel = selVal === a.id ? ' selected' : '';
      return '<option value="' + a.id + '"' + sel + '>' + a.id + ' · ' + a.name + ' · ' + a.levelText + '</option>';
    }).join('');
    var dis = ctDrawerAcctLock ? ' disabled' : '';
    body.innerHTML = ''
      + '<div class="dr-row"><div><div class="dr-label">姓名<span class="req">*</span></div><input class="dr-input" id="drName" value="' + ctEsc(v.name || '') + '" placeholder="请输入姓名"></div>'
      + '<div><div class="dr-label">手机号<span class="req">*</span></div><input class="dr-input" id="drPhone" value="' + ctEsc(v.raw || '') + '" placeholder="11 位手机号" maxlength="11"></div></div>'
      + '<div class="dr-row"><div><div class="dr-label">部门</div><input class="dr-input" id="drDept" value="' + ctEsc(v.dept || '') + '" placeholder="如 招投标部"></div>'
      + '<div><div class="dr-label">职位</div><input class="dr-input" id="drTitle" value="' + ctEsc(v.title || '') + '" placeholder="如 部门经理"></div></div>'
      + '<div class="dr-label">标签（可多选）</div>'
      + '<div class="dr-chips" id="drTags">'
      + ['决策人','主联系人','付款方','技术对接','高频使用','已开通APP','待激活'].map(function (t) {
          return '<button class="dr-chip' + (ctDraftTags.indexOf(t) >= 0 ? ' on' : '') + '" type="button" data-tag="' + t + '">' + t + '</button>';
        }).join('')
      + '</div>'
      + '<div class="dr-row"><div><div class="dr-label">微信号</div><input class="dr-input" id="drWechat" value="' + ctEsc(v.wechat || '') + '" placeholder="选填"></div>'
      + '<div><div class="dr-label">邮箱</div><input class="dr-input" id="drEmail" value="' + ctEsc(v.email || '') + '" placeholder="选填"></div></div>'
      + '<div class="dr-label">关联账户<span class="dr-hint">关联平台账户即归为「账户」，不关联则为「联系人」</span></div>'
      + '<select class="dr-select" id="drAcct"' + dis + '><option value="">未注册（暂不关联账户）</option>' + opts + '</select>'
      + '<div class="dr-label">备注</div>'
      + '<textarea class="dr-area" id="drRemark" placeholder="选填，记录客户偏好、决策链、注意事项等">' + ctEsc(v.note && v.note !== '—' ? v.note : '') + '</textarea>'
      + '<div class="dr-err" id="drErr"></div>';
    if (foot) foot.querySelector('#ctDrawerSave').textContent = '保存';
    var chips = document.getElementById('drTags');
    if (chips) chips.addEventListener('click', function (e) {
      var b = e.target.closest('.dr-chip');
      if (!b) return;
      var t = b.dataset.tag, i = ctDraftTags.indexOf(t);
      if (i >= 0) { ctDraftTags.splice(i, 1); b.classList.remove('on'); }
      else { ctDraftTags.push(t); b.classList.add('on'); }
    });
  }
  document.getElementById('ctMask').classList.add('show');
  var dr = document.getElementById('ctDrawer');
  dr.classList.add('show');
  dr.setAttribute('aria-hidden', 'false');
  setTimeout(function () {
    var first = dr.querySelector('input, textarea');
    if (first) first.focus();
  }, 220);
}
function ctCloseDrawer() {
  document.getElementById('ctMask').classList.remove('show');
  var dr = document.getElementById('ctDrawer');
  dr.classList.remove('show');
  dr.setAttribute('aria-hidden', 'true');
  ctDrawerMode = ''; ctDrawerKey = ''; ctDrawerAcctLock = '';
}
function ctShowErr(msg) {
  var e = document.getElementById('drErr');
  if (e) { e.textContent = msg; e.style.display = 'block'; }
}
function ctSave() {
  if (ctDrawerMode === 'note') {
    var txt = (document.getElementById('drNote').value || '').trim();
    if (!txt) { ctShowErr('请先填写小计内容'); return; }
    var wayEl = document.querySelector('#drWays .dr-chip.on');
    var way = wayEl ? wayEl.dataset.way : '手动记录';
    var nextEl = document.getElementById('drNext');
    var u0 = ctFindUnit(ctDrawerKey);
    if (!u0 || !u0.p) { ctCloseDrawer(); return; }
    var c0 = u0.p;
    c0.logs = c0.logs || [];
    c0.logs.unshift({ date: ctToday(), way: way, text: txt, next: nextEl && nextEl.value ? '下次跟进：' + nextEl.value : '' });
    c0.lastAt = ctToday();
    c0.lastContact = ctToday() + ' · ' + way;
    ctCloseDrawer();
    ctRenderList();
    ctRenderDetail();
    toast('小计已保存，已记入联系记录');
    return;
  }
  var name = (document.getElementById('drName').value || '').trim();
  var phone = (document.getElementById('drPhone').value || '').replace(/\s|-/g, '');
  if (!name) { ctShowErr('请填写联系人姓名'); return; }
  if (!phone) { ctShowErr('请填写手机号'); return; }
  if (!/^1\d{10}$/.test(phone)) { ctShowErr('手机号需为 11 位数字'); return; }
  var dup = CONTACTS.filter(function (x) { return x.raw === phone && x.id !== (ctFindUnit(ctDrawerKey) && ctFindUnit(ctDrawerKey).p ? ctFindUnit(ctDrawerKey).p.id : ''); });
  if (dup.length) { ctShowErr('该手机号已存在联系人：' + dup[0].name + '，请勿重复添加'); return; }
  var dept = (document.getElementById('drDept').value || '').trim();
  var titleV = (document.getElementById('drTitle').value || '').trim();
  var wechat = (document.getElementById('drWechat').value || '').trim();
  var email = (document.getElementById('drEmail').value || '').trim();
  var acctId = ctDrawerAcctLock || document.getElementById('drAcct').value;
  var remark = (document.getElementById('drRemark').value || '').trim();
  var acctText = '未关联';
  if (acctId) {
    var a = null;
    for (var i = 0; i < ACCTS.length; i++) { if (ACCTS[i].id === acctId) a = ACCTS[i]; }
    acctText = acctId + (a ? '（' + a.levelText + '）' : '');
  }
  var tags = ctDraftTags.slice();

  if (ctDrawerMode === 'add') {
    var nc = {
      id: 'c' + Date.now(), name: name, raw: phone, phone: ctMask(phone),
      dept: dept || '待补充', title: titleV || '待补充', tags: tags.length ? tags : ['新建'],
      primary: tags.indexOf('决策人') >= 0 || tags.indexOf('主联系人') >= 0,
      wechat: wechat, email: email, acct: acctText,
      lastContact: '—', lastAt: '', note: remark || '—', logs: []
    };
    CONTACTS.push(nc);
    ctCurKey = acctId ? 'a:' + acctId : 'c:' + nc.id;
    ctCloseDrawer();
    ctRenderList();
    ctRenderDetail();
    toast('已保存联系人档案：' + name);
  } else if (ctDrawerMode === 'edit') {
    var uu = ctFindUnit(ctDrawerKey);
    var ec = uu ? uu.p : null;
    if (!ec) { ctCloseDrawer(); return; }
    ec.name = name; ec.raw = phone; ec.phone = ctMask(phone);
    ec.dept = dept || '待补充'; ec.title = titleV || '待补充';
    ec.tags = tags; ec.primary = tags.indexOf('决策人') >= 0 || tags.indexOf('主联系人') >= 0;
    ec.wechat = wechat; ec.email = email; ec.acct = acctText;
    if (remark) ec.note = remark;
    ctCurKey = acctId ? 'a:' + acctId : 'c:' + ec.id;
    ctCloseDrawer();
    ctRenderList();
    ctRenderDetail();
    toast('已保存联系人修改：' + name);
  }
}

/* ---------- 事件绑定 ---------- */
(function () {
  /* 客户动态：向右收起 / 展开（右栏整列收成竖向窄条，非上下折叠） */
  var dynToggle = document.getElementById('btnDynToggle');
  if (dynToggle) {
    var dynWrap = document.querySelector('.two-col');
    var dynLabel = dynToggle.querySelector('span');
    var dynApply = function (collapsed) {
      if (dynWrap) dynWrap.classList.toggle('side-collapsed', collapsed);
      var dynMain = document.querySelector('.main');
      if (dynMain) dynMain.classList.toggle('dyn-flush', collapsed);
      dynToggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      dynToggle.title = collapsed ? '展开客户动态' : '收起客户动态';
      if (dynLabel) dynLabel.textContent = collapsed ? '展开' : '收起';
    };
    dynApply(localStorage.getItem('crm-dyn-collapsed') === '1');
    dynToggle.addEventListener('click', function () {
      var collapsed = !(dynWrap && dynWrap.classList.contains('side-collapsed'));
      dynApply(collapsed);
      localStorage.setItem('crm-dyn-collapsed', collapsed ? '1' : '0');
      if (typeof ctFitHeight === 'function') setTimeout(ctFitHeight, 260);
    });
  }

  /* 概览：深度数据（服务开通总览 + 客户评分构成）折叠/展开，状态记忆 */
  var deepBtn = document.getElementById('btnDeepToggle');
  var deepBodyEl = document.getElementById('deepBody');
  if (deepBtn && deepBodyEl) {
    var deepLabel = deepBtn.querySelector('span');
    var deepSvg = deepBtn.querySelector('svg');
    var deepApply = function (open) {
      deepBodyEl.hidden = !open;
      deepBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (deepLabel) deepLabel.textContent = open ? '收起' : '展开';
      if (deepSvg) deepSvg.style.transform = open ? 'none' : 'rotate(-90deg)';
    };
    deepApply(localStorage.getItem('crm-deep-open') === '1');
    deepBtn.addEventListener('click', function () {
      var open = deepBodyEl.hidden;
      deepApply(open);
      localStorage.setItem('crm-deep-open', open ? '1' : '0');
    });
  }

  /* 概览：决策链路分组切换（总部 / 分公司独立链路，组间不连线） */
  var chainTabs = document.getElementById('chainTabs');
  if (chainTabs) {
    var chainApply = function (key) {
      var btns = chainTabs.querySelectorAll('button');
      for (var i = 0; i < btns.length; i++) btns[i].classList.toggle('on', btns[i].dataset.chain === key);
      var groups = document.querySelectorAll('.chain-group');
      for (var j = 0; j < groups.length; j++) groups[j].hidden = (groups[j].id !== 'chain-' + key);
    };
    var chainSaved = localStorage.getItem('crm-chain-group');
    if (chainSaved) chainApply(chainSaved);
    chainTabs.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn || !btn.dataset.chain) return;
      chainApply(btn.dataset.chain);
      localStorage.setItem('crm-chain-group', btn.dataset.chain);
    });
  }

  window.addEventListener('resize', function () { ctFitHeight(); });

  var list = document.getElementById('ctList');
  if (!list) return;
  list.addEventListener('click', function (e) {
    var pin = e.target.closest('.ct-pin');
    if (pin) { e.stopPropagation(); ctTogglePin(pin.dataset.pin); return; }
    var item = e.target.closest('.ct-item');
    if (item && item.dataset.ct) ctSelect(item.dataset.ct);
  });
  document.getElementById('ctSearch').addEventListener('input', ctRenderList);

  var ctDetailEl = document.getElementById('ctDetail');
  if (ctDetailEl) ctDetailEl.addEventListener('click', function (e) {
    var a = e.target.closest('.ct-tel');
    if (!a) return;
    e.preventDefault();
    ctOpenDialPop(a);
  });
  var dialPop = document.getElementById('ctDialPop');
  if (dialPop) dialPop.addEventListener('click', function (e) {
    var b = e.target.closest('[data-way]');
    if (!b) return;
    var way = b.getAttribute('data-way'), tel = dialPop.getAttribute('data-tel') || '';
    ctCloseDialPop();
    if (way === '__sms') { toast('已向 ' + tel + ' 发送短信'); return; }
    if (way === '__rec') { toast('该号码暂无录音记录'); return; }
    toast('已通过' + way + '呼叫 ' + tel);
  });
  document.addEventListener('click', function (e) {
    var el = document.getElementById('ctDialPop');
    if (!el || !el.classList.contains('on')) return;
    if (el.contains(e.target)) return;
    if (e.target.closest && e.target.closest('.ct-tel')) return;
    ctCloseDialPop();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') ctCloseDialPop(); });
  window.addEventListener('scroll', ctCloseDialPop, true);
  window.addEventListener('resize', ctCloseDialPop);
  document.getElementById('ctFilter').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    ctFilterMode = b.dataset.reg;
    [].forEach.call(this.querySelectorAll('button'), function (x) { x.classList.toggle('on', x === b); });
    ctRenderList();
  });
  document.getElementById('btnAddContact').addEventListener('click', function () { ctOpenDrawer('add', ''); });
  document.getElementById('ctDrawerClose').addEventListener('click', ctCloseDrawer);
  document.getElementById('ctDrawerCancel').addEventListener('click', ctCloseDrawer);
  document.getElementById('ctMask').addEventListener('click', ctCloseDrawer);
  document.getElementById('ctDrawerSave').addEventListener('click', ctSave);
  var fab = document.getElementById('fabNote');
  if (fab) {
    fab.addEventListener('click', function () {
      var u = ctFindUnit(ctCurKey);
      if (!u || !u.p) { toast('该条目暂无联系人档案，请先点「补录联系人」'); return; }
      ctOpenDrawer('note', ctCurKey);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') ctCloseDrawer();
  });
  function placeFab() {
    if (!fab) return;
    var pane = document.getElementById('pane-contacts');
    var active = pane ? pane.classList.contains('active') : false;
    fab.title = active ? '为当前选中账户/联系人写联系小计' : '写联系小计（需切换到「账户与联系人」页签）';
  }
  placeFab();
  [].forEach.call(document.querySelectorAll('.tab-btn'), function (btn) {
    btn.addEventListener('click', function () { setTimeout(placeFab, 30); });
  });

  var first = ctUnits()[0];
  if (first) ctCurKey = first.key;
  ctRenderList();
  ctRenderDetail();
})();

/* ==================== 更多操作抽屉 ==================== */
(function () {
  var GROUPS = [
    { t: '商机与客户', items: ['商机工具', '相关账户', '转介绍客户', '推荐信息', '模拟客户', '同行业信息搜索', '客户中标记录'] },
    { t: '合同与订单', items: ['生成合同', '查看订单', '在线开通会员', '创建增值服务订单', '查看优惠', '优惠券工具', '服务延期', '未到账预开通', '查看发票邮寄'] },
    { t: '服务与协作', items: ['增值业务', '项目协助', '信息协助', '服务咨询', '销售协助', '添加广告'] },
    { t: '资料与账户', items: ['上传文件', '补加联系人', '密码重置', '会员服务资料', '历史回执'] }
  ];
  var mask = document.getElementById('moMask');
  var drawer = document.getElementById('moDrawer');
  var body = document.getElementById('moBody');
  var btn = document.getElementById('btnMoreOps');
  if (!mask || !drawer || !body || !btn) return;

  var total = 0;
  body.innerHTML = GROUPS.map(function (g) {
    total += g.items.length;
    return '<div class="mo-group">' +
      '<div class="mo-g-head"><span class="mo-g-title">' + g.t + '</span><span class="mo-g-cnt">' + g.items.length + ' 项</span></div>' +
      '<div class="mo-grid">' + g.items.map(function (n) {
        return '<button class="mo-item" type="button" data-name="' + n + '"><i></i>' + n + '</button>';
      }).join('') + '</div></div>';
  }).join('');
  document.getElementById('moCount').textContent = total + ' 项';
  document.getElementById('moSub').textContent = '大土豆有限责任公司 · 客户ID C20240118-0037';

  function moOpen() { mask.classList.add('show'); drawer.classList.add('show'); drawer.setAttribute('aria-hidden', 'false'); }
  function moClose() { mask.classList.remove('show'); drawer.classList.remove('show'); drawer.setAttribute('aria-hidden', 'true'); }

  btn.addEventListener('click', moOpen);
  document.getElementById('moClose').addEventListener('click', moClose);
  mask.addEventListener('click', moClose);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') moClose(); });
  body.addEventListener('click', function (e) {
    var item = e.target.closest('.mo-item');
    if (!item) return;
    moClose();
    toast('「' + item.dataset.name + '」（待接入）');
  });
})();

