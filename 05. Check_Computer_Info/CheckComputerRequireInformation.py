import psutil

# CPU 속도 출력
cpu=psutil.cpu_freq()
cpu_current_ghz = round(cpu.current / 1000, 2)
print("cpu 속도:", cpu_current_ghz, "GHZ")

# CPU 물리코어 수 출력
cpu_core = psutil.cpu_count(logical=False)
print("코어:", cpu_core, "개")

# 메모리의 총량 출력
memory = psutil.virtual_memory()
memory_total = round(memory.total / 1024**3)
print("메모리:", memory_total, "GB")

# 디스크 크기 출력(찾은 수만큼)
disk = psutil.disk_partitions()
for p in disk:
    print(p.mountpoint, p.fstype, end=' ')
    du = psutil.disk_usage(p.mountpoint)
    disk_total = round(du.total / 1024**3) # 1024 * 3
    print("디스크 크기:", disk_total, "GB")

# 네트워크를 통해 보내고 받은 데이터(누적데이터)를 MB 단위로 출력
net = psutil.net_io_counters()
sent = round(net.bytes_sent/1024**2, 1)
recv = round(net.bytes_recv/1024**2, 1)
print("보내기:", sent, "MB 받기:", recv, "MB")