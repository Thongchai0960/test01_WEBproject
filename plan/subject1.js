// 1. ฐานข้อมูลวิชา (ข้อมูลทั้งหมดตามหลักสูตรสองปริญญา ปี 1 - ปี 4)
const courseData = {
    // ================== ปี 1 เทอม 1 ==================
    "Calculus 1": {
        code: "05016201",
        nameTH: "แคลคูลัส 1 (Calculus 1)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "ลิมิตและความต่อเนื่องของฟังก์ชัน อนุพันธ์ของฟังก์ชันพีชคณิตและฟังก์ชันอดิศัย การประยุกต์ของอนุพันธ์ อินทิกรัลจำกัดเขตและไม่จำกัดเขต ทฤษฎีบทหลักมูลของแคลคูลัส เทคนิคการอินทิเกรตเบื้องต้น และการประยุกต์ใช้อินทิกรัล"
    },
    "Physics 1": {
        code: "05366001",
        nameTH: "ฟิสิกส์และการประยุกต์ 1 (Physics and Applications 1)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "เวกเตอร์และจลนศาสตร์ กลศาสตร์ของอนุภาค กฎการเคลื่อนที่ของนิวตัน งานและพลังงาน โมเมนตัมและการดล การเคลื่อนที่แบบหมุนและวัตถุแข็งเกร็ง กลศาสตร์ของไหล อุณหพลศาสตร์เบื้องต้น การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย และคลื่นกล"
    },
    "Physics Lab 1": {
        code: "05366002",
        nameTH: "ปฏิบัติการฟิสิกส์และการประยุกต์ 1 (Physics and Applications Lab 1)",
        credits: "1 (0-3-2)",
        prerequisite: "เรียนควบคู่กับ 05366001",
        description: "ปฏิบัติการทดลองทางฟิสิกส์ที่สอดคล้องกับเนื้อหาวิชาฟิสิกส์และการประยุกต์ 1 เพื่อเสริมสร้างทักษะการวัด การบันทึกผล และการวิเคราะห์ข้อมูลทางวิทยาศาสตร์"
    },
    "General Biology": {
        code: "05206500",
        nameTH: "ชีววิทยาทั่วไป (General Biology)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "หลักการเบื้องต้นทางชีววิทยา โครงสร้างและหน้าที่ของเซลล์ พันธุศาสตร์ วิวัฒนาการ ความหลากหลายของสิ่งมีชีวิต โครงสร้างและการทำงานของพืชและสัตว์ นิเวศวิทยาและสิ่งแวดล้อม"
    },
    "General Biology Lab": {
        code: "05206501",
        nameTH: "ปฏิบัติการชีววิทยาทั่วไป (General Biology Lab)",
        credits: "1 (0-3-2)",
        prerequisite: "เรียนควบคู่กับ 05206500",
        description: "ปฏิบัติการทดลองทางชีววิทยาที่สอดคล้องกับเนื้อหาวิชาชีววิทยาทั่วไป การใช้กล้องจุลทรรศน์ การศึกษาเซลล์และเนื้อเยื่อ"
    },
    "Drawing and Workshop": {
        code: "05366043",
        nameTH: "การเขียนแบบและการฝึกงานวิศวกรรม (Drawing and Engineering Workshop)",
        credits: "1 (0-3-2)",
        prerequisite: "-",
        description: "การอ่านและเขียนแบบทางวิศวกรรม มาตรฐานการเขียนแบบ การใช้เครื่องมือวัด การฝึกปฏิบัติงานพื้นฐานทางวิศวกรรม เช่น งานตะไบ งานกลึง งานเชื่อม และความปลอดภัยในโรงงาน"
    },
    "Computer Programming": {
        code: "05366022",
        nameTH: "การเขียนโปรแกรมคอมพิวเตอร์ (Computer Programming)",
        credits: "3 (2-2-5)",
        prerequisite: "-",
        description: "หลักการทำงานของคอมพิวเตอร์ การแก้ปัญหาและอัลกอริทึม โครงสร้างภาษาคอมพิวเตอร์ ชนิดข้อมูล นิพจน์ คำสั่งควบคุม ฟังก์ชัน อาร์เรย์ สายอักขระ พอยน์เตอร์ และการจัดการไฟล์เบื้องต้น"
    },
    "Introduction to IoT": {
        code: "01236255",
        nameTH: "พื้นฐานระบบไอโอที (Introduction to Internet of Things)",
        credits: "3 (2-2-5)",
        prerequisite: "-",
        description: "สถาปัตยกรรมของอินเทอร์เน็ตของสรรพสิ่ง (IoT) องค์ประกอบของระบบ เครือข่ายการสื่อสาร โพรโทคอลที่ใช้ใน IoT แพลตฟอร์มคลาวด์ และกรณีศึกษาการประยุกต์ใช้งานในอุตสาหกรรม"
    },
    "Software Application for Business": {
        code: "90642118",
        nameTH: "โปรแกรมคอมพิวเตอร์ประยุกต์ทางธุรกิจ (Application Software for Business)",
        credits: "2 (1-2-3)",
        prerequisite: "-",
        description: "การใช้ซอฟต์แวร์และแอปพลิเคชันพื้นฐานเพื่อสนับสนุนการทำงานและธุรกิจ การจัดการเอกสาร การวิเคราะห์ข้อมูลเบื้องต้น และการนำเสนอผลงาน"
    },
    "Found English 1": {
        code: "90644007",
        nameTH: "ภาษาอังกฤษพื้นฐาน 1 (Foundation English 1)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "การฝึกทักษะภาษาอังกฤษทั้งการฟัง พูด อ่าน และเขียน ในบริบทของชีวิตประจำวันและสังคม การอ่านจับใจความ ไวยากรณ์พื้นฐาน และการสื่อสาร"
    },
    "Charm School": {
        code: "90641001",
        nameTH: "โรงเรียนสร้างเสน่ห์ (Charm School)",
        credits: "2 (1-2-3)",
        prerequisite: "-",
        description: "การพัฒนาบุคลิกภาพ มารยาททางสังคม การสื่อสารอย่างมีประสิทธิภาพ ทักษะการเป็นผู้นำและการทำงานเป็นทีม เพื่อเสริมสร้างความมั่นใจและการอยู่ร่วมกับผู้อื่นในสังคม"
    },

    // ================== ปี 1 เทอม 2 ==================
    "Calculus 2": {
        code: "05016202",
        nameTH: "แคลคูลัส 2 (Calculus 2)",
        credits: "3 (3-0-6)",
        prerequisite: "05016201 แคลคูลัส 1",
        description: "เทคนิคการอินทิเกรตขั้นสูง ลำดับและอนุกรม อนุกรมกำลังและอนุกรมเทย์เลอร์ ภาคตัดกรวย แคลคูลัสของฟังก์ชันหลายตัวแปร อนุพันธ์ย่อย และอินทิกรัลหลายชั้น"
    },
    "Physics 2": {
        code: "05366003",
        nameTH: "ฟิสิกส์และการประยุกต์ 2 (Physics and Applications 2)",
        credits: "3 (3-0-6)",
        prerequisite: "05366001 ฟิสิกส์ 1",
        description: "ไฟฟ้าสถิต สนามไฟฟ้าและศักย์ไฟฟ้า กระแสไฟฟ้าและวงจรไฟฟ้ากระแสตรง สนามแม่เหล็ก การเหนี่ยวนำแม่เหล็กไฟฟ้า วงจรไฟฟ้ากระแสสลับ คลื่นแม่เหล็กไฟฟ้า ทัศนศาสตร์ และฟิสิกส์ยุคใหม่เบื้องต้น"
    },
    "Physics Lab 2": {
        code: "05366004",
        nameTH: "ปฏิบัติการฟิสิกส์และการประยุกต์ 2 (Physics and Applications Lab 2)",
        credits: "1 (0-3-2)",
        prerequisite: "เรียนควบคู่กับ 05366003",
        description: "ปฏิบัติการทดลองทางฟิสิกส์ที่สอดคล้องกับเนื้อหาวิชาฟิสิกส์ 2 เน้นการทดลองด้านไฟฟ้า แม่เหล็ก และทัศนศาสตร์"
    },
    "Fundamental Digital System": {
        code: "05366025",
        nameTH: "อิเล็กทรอนิกส์ดิจิตอล (Digital Electronics)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "ระบบตัวเลขและรหัส พีชคณิตบูลีน ลอจิกเกต การลดรูปสมการลอจิก วงจรคอมบิเนชัน วงจรซีเควนเชียล ฟลิปฟลอป เคาน์เตอร์ และรีจิสเตอร์"
    },
    "Circuit and Electronics": {
        code: "05366021",
        nameTH: "ทฤษฎีวงจรไฟฟ้าและอิเล็กทรอนิกส์พื้นฐาน (Electric Circuit Theory and Basic Electronics)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "ปริมาณและกฎพื้นฐานทางวงจรไฟฟ้า วิธีการวิเคราะห์วงจร ทฤษฎีบทโครงข่าย ตัวเก็บประจุ ตัวเหนี่ยวนำ วงจร RC, RL, RLC แหล่งจ่ายไฟฟ้ากระแสสลับ และหลักการทำงานของไดโอด ทรานซิสเตอร์"
    },
    "Object-Oriented Data Structure": {
        code: "01236257",
        nameTH: "การเขียนโปรแกรมเชิงวัตถุและโครงสร้างข้อมูล (OOP and Data Structure)",
        credits: "3 (2-2-5)",
        prerequisite: "-",
        description: "หลักการเขียนโปรแกรมเชิงวัตถุ คลาส ออบเจกต์ การสืบทอด พหุสัณฐาน และโครงสร้างข้อมูล เช่น List, Stack, Queue, Tree, Graph รวมถึงอัลกอริทึมการค้นหาและเรียงลำดับ"
    },
    "Digital Citizen": {
        code: "90641002",
        nameTH: "ความฉลาดทางดิจิทัล (Digital Intelligence Quotient)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "ความเข้าใจและการใช้เทคโนโลยีดิจิทัลอย่างสร้างสรรค์และปลอดภัย จริยธรรมและกฎหมายที่เกี่ยวข้องกับข้อมูล สิทธิส่วนบุคคล"
    },
    "Pre-Activities For Engineers": {
        code: "90642036",
        nameTH: "เตรียมความพร้อมสำหรับวิศวกร (Pre-activities for Engineers)",
        credits: "1 (0-3-0)",
        prerequisite: "-",
        description: "การปรับตัวและการเตรียมความพร้อมเพื่อเข้าสู่วิชาชีพวิศวกร กฎระเบียบ จรรยาบรรณวิชาชีพ และการวางแผนการศึกษา"
    },
    "Found English 2": {
        code: "90644008",
        nameTH: "ภาษาอังกฤษพื้นฐาน 2 (Foundation English 2)",
        credits: "3 (3-0-6)",
        prerequisite: "90644007 ภาษาอังกฤษพื้นฐาน 1",
        description: "การฝึกทักษะภาษาอังกฤษในระดับที่สูงขึ้น เน้นการอ่านบทความทางวิชาการ การเขียนบรรยายและสรุปความ และการนำเสนอผลงานเป็นภาษาอังกฤษ"
    },
    "Team Project 1": {
        code: "01236xxx",
        nameTH: "โครงงานกลุ่ม 1 (Team Project 1)",
        credits: "3 (x-x-x)",
        prerequisite: "-",
        description: "การฝึกทำงานร่วมกันเป็นทีมเพื่อพัฒนาโครงงานที่ประยุกต์ใช้ความรู้ทางคอมพิวเตอร์และระบบ IoT เบื้องต้น"
    },

    // ================== ปี 2 เทอม 1 ==================
    "MATH FOR PHYSICISTS": {
        code: "05366020",
        nameTH: "คณิตศาสตร์สำหรับนักฟิสิกส์ (Mathematics for Physicists)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "สมการเชิงอนุพันธ์สามัญ พีชคณิตเชิงเส้น เมทริกซ์และดีเทอร์มิแนนต์ การแปลงลาปลาส อนุกรมฟูเรียร์ และการประยุกต์ใช้คณิตศาสตร์เพื่อแก้ปัญหาทางฟิสิกส์"
    },
    "Electronic Circuit": {
        code: "05366023",
        nameTH: "วงจรอิเล็กทรอนิกส์ (Electronics Circuits)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "การวิเคราะห์และออกแบบวงจรอิเล็กทรอนิกส์ วงจรขยายสัญญาณด้วย BJT และ FET ออปแอมป์ วงจรกรองสัญญาณความถี่ และวงจรสร้างสัญญาณ"
    },
    "Electronic Lab": {
        code: "05366024",
        nameTH: "ปฏิบัติการอิเล็กทรอนิกส์ (Electronics Lab)",
        credits: "1 (0-3-2)",
        prerequisite: "-",
        description: "ปฏิบัติการที่เกี่ยวข้องกับเนื้อหาวิชาวงจรอิเล็กทรอนิกส์ เพื่อเสริมสร้างความเข้าใจในการต่อวงจรและการวัดสัญญาณจริง"
    },
    "Electromagnetic Fields": {
        code: "05366032",
        nameTH: "สนามแม่เหล็กไฟฟ้า (Electromagnetic Field)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "การวิเคราะห์เวกเตอร์ กฎของคูลอมบ์ ความเข้มสนามไฟฟ้า กฎของเกาส์ ศักย์ไฟฟ้า สนามแม่เหล็กสถิต กฎของฟาราเดย์ และสมการของแมกซ์เวลล์"
    },
    "SENSORS AND TRANSDUCERS": {
        code: "05366034",
        nameTH: "เซ็นเซอร์และทรานสดิวเซอร์ (Sensors and Transducers)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "หลักการทำงานของเซนเซอร์และทรานสดิวเซอร์ประเภทต่างๆ การปรับสภาพสัญญาณ และการประยุกต์ใช้ในระบบการวัดและระบบไอโอที"
    },
    "Microcontroller and Interfacing": {
        code: "05366036",
        nameTH: "ไมโครคอนโทรลเลอร์และการเชื่อมต่อ (Microcontroller and Interfacing)",
        credits: "3 (2-2-5)",
        prerequisite: "-",
        description: "สถาปัตยกรรมไมโครคอนโทรลเลอร์ ชุดคำสั่งและการเขียนโปรแกรมควบคุม การรับส่งข้อมูล การเชื่อมต่อกับอุปกรณ์ภายนอก และการประยุกต์ใช้งานในระบบควบคุม"
    },
    "Intermediate Physics Lab 1": {
        code: "05366039",
        nameTH: "ปฏิบัติการฟิสิกส์ระดับกลาง 1 (Intermediate Physics Lab 1)",
        credits: "1 (0-3-2)",
        prerequisite: "-",
        description: "ปฏิบัติการทดลองทางฟิสิกส์ขั้นสูง การวัดความแม่นยำสูง การประมวลผลข้อมูล และการใช้เครื่องมือทางมาตรวิทยา"
    },
    "Principles of Communication": {
        code: "01236258",
        nameTH: "การสื่อสารพื้นฐาน (Principles of Communications)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "พื้นฐานระบบการสื่อสารข้อมูล การวิเคราะห์สัญญาณ การมอดูเลตสัญญาณแอนะล็อกและดิจิทัล และสื่อกลางในการส่งข้อมูล"
    },
    "Gen-Ed": {
        code: "90xxxxxx",
        nameTH: "วิชาเลือกหมวดวิชาศึกษาทั่วไป (General Education Elective)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "วิชาเลือกตามเกณฑ์ของคณะเพื่อพัฒนาทักษะชีวิตและสังคม"
    },

    // ================== ปี 2 เทอม 2 ==================
    "INDUSTRIAL STATISTICS": {
        code: "05366038",
        nameTH: "สถิติในงานอุตสาหกรรม (Industrial Statistics)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "ทฤษฎีความน่าจะเป็น การแจกแจงความน่าจะเป็นของตัวแปรสุ่ม สถิติเชิงพรรณนา การประมาณค่า การทดสอบสมมติฐาน การวิเคราะห์ความแปรปรวน และการควบคุมคุณภาพเชิงสถิติในงานอุตสาหกรรม"
    },
    "Wave & Optics": {
        code: "05366033",
        nameTH: "คลื่นและทัศนศาสตร์ (Waves and Optics)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "การเคลื่อนที่แบบคลื่น สมการคลื่น คลื่นเสียง ทัศนศาสตร์เชิงเรขาคณิต เลนส์และกระจก ทัศนศาสตร์เชิงฟิสิกส์ การแทรกสอด การเลี้ยวเบน และโพลาไรเซชันของแสง"
    },
    "Modern Physics": {
        code: "05366030",
        nameTH: "ฟิสิกส์ยุคใหม่ (Modern Physics)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "ทฤษฎีสัมพัทธภาพพิเศษ ทฤษฎีควอนตัมเบื้องต้น ปรากฏการณ์โฟโตอิเล็กทริก ปรากฏการณ์คอมป์ตัน โครงสร้างของอะตอมและโมเลกุล ฟิสิกส์นิวเคลียร์เบื้องต้น"
    },
    "Digital Electronic Lab": {
        code: "05366xxx",
        nameTH: "ปฏิบัติการอิเล็กทรอนิกส์ดิจิทัล (Digital Electronic Lab)",
        credits: "1 (0-3-2)",
        prerequisite: "-",
        description: "ปฏิบัติการทดลองที่เกี่ยวข้องกับระบบตัวเลข ลอจิกเกต วงจรคอมบิเนชันและซีเควนเชียล เพื่อความเข้าใจในการออกแบบวงจรดิจิทัล"
    },
    "Mechanic": {
        code: "05366028",
        nameTH: "กลศาสตร์ (Mechanics)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "จลนศาสตร์และพลศาสตร์ของอนุภาค ระบบอนุภาค วัตถุแข็งเกร็ง กลศาสตร์แบบลากรองจ์และแฮมิลตัน แรงสู่ศูนย์กลาง และการแกว่งกวัด"
    },
    "Intermediate Physics Lab 2": {
        code: "05366040",
        nameTH: "ปฏิบัติการฟิสิกส์ระดับกลาง 2 (Intermediate Physics Lab 2)",
        credits: "1 (0-3-2)",
        prerequisite: "-",
        description: "ปฏิบัติการทดลองทางฟิสิกส์ขั้นสูงที่ต่อเนื่องจากระดับกลาง 1 เน้นการทดลองที่ซับซ้อนและการวิเคราะห์ข้อมูลขั้นสูง"
    },
    "Web and Mobile App Development": {
        code: "01236xxx",
        nameTH: "การพัฒนาเว็บและแอปพลิเคชันบนมือถือ (Web and Mobile App Development)",
        credits: "3 (2-2-5)",
        prerequisite: "-",
        description: "หลักการออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชันบนสมาร์ทโฟน การใช้เฟรมเวิร์กสมัยใหม่ การเชื่อมต่อฐานข้อมูล และการออกแบบส่วนติดต่อผู้ใช้ (UI)"
    },
    "Interaction Design": {
        code: "01236xxx",
        nameTH: "การออกแบบปฏิสัมพันธ์ (Interaction Design)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "หลักการออกแบบประสบการณ์ผู้ใช้ (UX) และส่วนติดต่อผู้ใช้ (UI) พฤติกรรมมนุษย์กับคอมพิวเตอร์ และการทดสอบระบบกับผู้ใช้งานจริง"
    },
    "IoT Networks and Data Communications": {
        code: "01236xxx",
        nameTH: "เครือข่ายไอโอทีและการสื่อสารข้อมูล (IoT Networks and Data Communications)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "สถาปัตยกรรมเครือข่าย โปรโตคอลการสื่อสารข้อมูลสำหรับ IoT (เช่น MQTT, CoAP) เทคโนโลยีไร้สายที่ใช้ใน IoT และความปลอดภัยของเครือข่าย"
    },
    "Team Project 2": {
        code: "01236xxx",
        nameTH: "โครงงานกลุ่ม 2 (Team Project 2)",
        credits: "3 (x-x-x)",
        prerequisite: "-",
        description: "การบูรณาการความรู้ทางฟิสิกส์และไอโอที เพื่อสร้างสรรค์นวัตกรรมหรือแก้ไขปัญหาในอุตสาหกรรม โดยทำงานร่วมกันเป็นทีม"
    },

    // ================== ปี 3 เทอม 1 ==================
    "Chemistry": {
        code: "05026xxx",
        nameTH: "เคมีทั่วไป (General Chemistry)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "โครงสร้างอะตอม ตารางธาตุ พันธะเคมี ปริมาณสัมพันธ์ แก๊ส ของเหลว ของแข็ง อุณหพลศาสตร์เคมี และจลนศาสตร์เคมี"
    },
    "Chemistry Lab": {
        code: "05026xxx",
        nameTH: "ปฏิบัติการเคมีทั่วไป (General Chemistry Lab)",
        credits: "1 (0-3-2)",
        prerequisite: "เรียนควบคู่กับ Chemistry",
        description: "ปฏิบัติการทดลองทางเคมีพื้นฐาน เพื่อฝึกทักษะการใช้เครื่องมือทางเคมีและการวิเคราะห์สาร"
    },
    "Thermal Physics": {
        code: "05366029",
        nameTH: "ฟิสิกส์เชิงความร้อน (Thermal Physics)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "อุณหพลศาสตร์ กฎของอุณหพลศาสตร์ เอนโทรปี ทฤษฎีจลน์ของแก๊ส และกลศาสตร์สถิติเบื้องต้น"
    },
    "Physics and Semiconductor": {
        code: "05366xxx",
        nameTH: "ฟิสิกส์และสารกึ่งตัวนำ (Physics and Semiconductor)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "สมบัติทางฟิสิกส์ของวัสดุกึ่งตัวนำ โครงสร้างแถบพลังงาน พาหะนำประจุ รอยต่อพีเอ็น (P-N Junction) และหลักการทำงานของอุปกรณ์สารกึ่งตัวนำ"
    },
    "SEMINAR": {
        code: "05366091",
        nameTH: "สัมมนา (Seminar)",
        credits: "1 (0-2-1)",
        prerequisite: "-",
        description: "การค้นคว้า รวบรวมข้อมูล วิเคราะห์ และนำเสนอบทความวิชาการหรือความก้าวหน้าทางเทคโนโลยีด้านฟิสิกส์อุตสาหกรรมและไอโอที"
    },
    "INDUSTRIAL PHYSICS LAB 1": {
        code: "05366xxx",
        nameTH: "ปฏิบัติการฟิสิกส์อุตสาหกรรม 1 (Industrial Physics Lab 1)",
        credits: "1 (0-3-2)",
        prerequisite: "-",
        description: "ปฏิบัติการทางฟิสิกส์ที่ประยุกต์ใช้ในอุตสาหกรรม การใช้เครื่องมือวัดขั้นสูงและการประเมินความไม่แน่นอนในการวัด"
    },
    "Artificial Intelligence": {
        code: "01236xxx",
        nameTH: "ปัญญาประดิษฐ์ (Artificial Intelligence)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "หลักการพื้นฐานของปัญญาประดิษฐ์ การค้นหา การแก้ปัญหา การเรียนรู้ของเครื่อง (Machine Learning) และการประยุกต์ใช้ AI ในระบบ IoT"
    },
    "MAJOR ELECTIVE 1": {
        code: "05366xxx / 01236xxx",
        nameTH: "วิชาเอกเลือก 1 (Major Elective 1)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "รายวิชาเลือกตามความสนใจในสาขาฟิสิกส์อุตสาหกรรม หรือวิศวกรรมระบบไอโอทีและสารสนเทศ"
    },
    "MAJOR ELECTIVE 2": {
        code: "05366xxx / 01236xxx",
        nameTH: "วิชาเอกเลือก 2 (Major Elective 2)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "รายวิชาเลือกตามความสนใจในสาขาฟิสิกส์อุตสาหกรรม หรือวิศวกรรมระบบไอโอทีและสารสนเทศ"
    },

    // ================== ปี 3 เทอม 2 ==================
    "Quantum Mechanic & Technology": {
        code: "05366031",
        nameTH: "กลศาสตร์ควอนตัมและเทคโนโลยี (Quantum Mechanics and Technology)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "สมการชเรอดิงเงอร์ ศักย์แบบต่างๆ ออร์บิทัลของอะตอม สปิน และการประยุกต์ใช้ทฤษฎีควอนตัมในเทคโนโลยีสมัยใหม่"
    },
    "Measurement and Instrumentation": {
        code: "05366xxx",
        nameTH: "การวัดและเครื่องมือวัด (Measurement and Instrumentation)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "หลักการของระบบการวัดและเครื่องมือวัดทางอุตสาหกรรม การสอบเทียบ มาตรวิทยา และการประมวลผลสัญญาณการวัด"
    },
    "INDUSTRIAL PHYSICS LAB 2": {
        code: "05366xxx",
        nameTH: "ปฏิบัติการฟิสิกส์อุตสาหกรรม 2 (Industrial Physics Lab 2)",
        credits: "1 (0-3-2)",
        prerequisite: "-",
        description: "ปฏิบัติการทางฟิสิกส์อุตสาหกรรมขั้นสูง เน้นการประยุกต์ใช้เทคโนโลยีด้านเครื่องมือวัด การควบคุม และระบบอัตโนมัติ"
    },
    "MAJOR ELECTIVE 3": {
        code: "05366xxx / 01236xxx",
        nameTH: "วิชาเอกเลือก 3 (Major Elective 3)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "รายวิชาเลือกตามความสนใจในสาขาฟิสิกส์อุตสาหกรรม หรือวิศวกรรมระบบไอโอทีและสารสนเทศ"
    },
    "Elective 1": {
        code: "xxxxxxxx",
        nameTH: "วิชาเลือก 1 (Elective 1)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "รายวิชาเลือกเพิ่มเติมตามแผนการศึกษา"
    },
    "Industrial IoT": {
        code: "01236xxx",
        nameTH: "อินเทอร์เน็ตของสรรพสิ่งสำหรับอุตสาหกรรม (Industrial IoT)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "สถาปัตยกรรม IIoT การประยุกต์ใช้เซนเซอร์และเครือข่ายในโรงงานอุตสาหกรรม การบำรุงรักษาเชิงคาดการณ์ (Predictive Maintenance) และระบบอัตโนมัติ"
    },
    "Cyber Security": {
        code: "01236xxx",
        nameTH: "ความมั่นคงปลอดภัยทางไซเบอร์ (Cyber Security)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "หลักการความมั่นคงปลอดภัยของข้อมูล การเข้ารหัสลับ การป้องกันภัยคุกคามทางไซเบอร์ และความปลอดภัยสำหรับระบบและอุปกรณ์ IoT"
    },
    "Gen-Ed (LANG)": {
        code: "90xxxxxx",
        nameTH: "วิชาศึกษาทั่วไป หมวดภาษา (Gen-Ed Language)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "วิชาเลือกหมวดภาษาต่างประเทศเพื่อเสริมสร้างทักษะการสื่อสารในระดับสากล"
    },
    "Team Project 3": {
        code: "01236xxx",
        nameTH: "โครงงานกลุ่ม 3 (Team Project 3)",
        credits: "3 (x-x-x)",
        prerequisite: "-",
        description: "โครงงานกลุ่มขั้นสูงที่เตรียมความพร้อมก่อนการทำปริญญานิพนธ์หรือก่อนออกสหกิจศึกษา"
    },

    // ================== ปี 4 (Plan 1 & Plan 2) ==================
    "Project 1": {
        code: "053660xx / 01236xxx",
        nameTH: "โครงงาน 1 (Project 1)",
        credits: "3 (0-9-0)",
        prerequisite: "-",
        description: "การเสนอหัวข้อโครงงาน การศึกษาค้นคว้า และเริ่มต้นทำโครงงานทางฟิสิกส์อุตสาหกรรมหรือวิศวกรรมระบบไอโอที"
    },
    "Project 2": {
        code: "053660xx / 01236xxx",
        nameTH: "โครงงาน 2 (Project 2)",
        credits: "3 (0-9-0)",
        prerequisite: "ผ่าน Project 1",
        description: "การดำเนินงานโครงงานต่อจาก Project 1 จนเสร็จสมบูรณ์ พร้อมจัดทำรูปเล่มรายงานและนำเสนอผลงาน"
    },
    "Elective 2": {
        code: "xxxxxxxx",
        nameTH: "วิชาเลือก 2 (Elective 2)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "รายวิชาเลือกเพิ่มเติมตามแผนการศึกษา"
    },
    "Elective 3": {
        code: "xxxxxxxx",
        nameTH: "วิชาเลือก 3 (Elective 3)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "รายวิชาเลือกเพิ่มเติมตามแผนการศึกษา"
    },
    "Free Elective 1": {
        code: "xxxxxxxx",
        nameTH: "วิชาเลือกเสรี 1 (Free Elective 1)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "วิชาที่เปิดสอนในสถาบันซึ่งนักศึกษาสามารถเลือกเรียนได้ตามความสนใจ"
    },
    "Free Elective 2": {
        code: "xxxxxxxx",
        nameTH: "วิชาเลือกเสรี 2 (Free Elective 2)",
        credits: "3 (3-0-6)",
        prerequisite: "-",
        description: "วิชาที่เปิดสอนในสถาบันซึ่งนักศึกษาสามารถเลือกเรียนได้ตามความสนใจ"
    },
    "Co-Operative / Study Abroad": {
        code: "05366093 / 01236319",
        nameTH: "สหกิจศึกษา หรือ การปฏิบัติการฝึกงานต่างประเทศ",
        credits: "6 (0-45-0)",
        prerequisite: "ผ่านเกณฑ์ที่คณะกำหนด",
        description: "การออกปฏิบัติงานจริงในสถานประกอบการ หรือการฝึกงานในต่างประเทศ เป็นระยะเวลาไม่น้อยกว่า 16 สัปดาห์ เพื่อสร้างเสริมประสบการณ์วิชาชีพ (สำหรับนักศึกษา Plan 2)"
    },
}
// === เพิ่มวิชาของฝั่ง IoT ===
const courseDataIoT = {

    "CALCULUS 1": {
        code: "01006030",
        nameTH: "แคลคูลัส 1",
        credits: "3",
        prerequisite: "-",
        description: "รายวิชาพื้นฐานทางคณิตศาสตร์ แคลคูลัส 1"
    },
    "GEN PHYS 1": {
        code: "01006020",
        nameTH: "ฟิสิกส์ทั่วไป 1",
        credits: "3", prerequisite: "-",
        description: "รายวิชาฟิสิกส์ทั่วไป 1 สำหรับวิศวกรรม"
    },
    "GEN PHYS LAB 1": {
        code: "01006021",
        nameTH: "ปฏิบัติการฟิสิกส์ทั่วไป 1",
        credits: "1", prerequisite: "-",
        description: "การทดลองที่เกี่ยวข้องกับฟิสิกส์ทั่วไป 1"
    },
    "CIRCUIT ELEC": {
        code: "01236604",
        nameTH: "วงจรไฟฟ้า",
        credits: "3", prerequisite: "-",
        description: "การวิเคราะห์วงจรไฟฟ้าเบื้องต้น"
    },
    "COM PROG": {
        code: "01006012",
        nameTH: "การเขียนโปรแกรมคอมพิวเตอร์",
        credits: "3", prerequisite: "-",
        description: "หลักการเขียนโปรแกรมคอมพิวเตอร์เบื้องต้น"
    },
    "INTRO IOT": {
        code: "01236611",
        nameTH: "แนะนำอินเทอร์เน็ตของสรรพสิ่ง",
        credits: "3", prerequisite: "-",
        description: "ความรู้เบื้องต้นเกี่ยวกับระบบ IoT"
    },
    "CIR ELEC LAB": {
        code: "01236605",
        nameTH: "ปฏิบัติการวงจรไฟฟ้า",
        credits: "1", prerequisite: "-",
        description: "การทดลองและการต่อวงจรไฟฟ้า"
    },
    "3D DRAWING": {
        code: "01236610",
        nameTH: "การเขียนแบบสามมิติ",
        credits: "1", prerequisite: "-",
        description: "การใช้โปรแกรมเขียนแบบทางวิศวกรรม"
    },
    "INTRO ENGLISH": {
        code: "90641008",
        nameTH: "ภาษาอังกฤษเบื้องต้น",
        credits: "0", prerequisite: "-",
        description: "การปรับพื้นฐานภาษาอังกฤษ"
    },
    "PRE ACT": {
        code: "90642036",
        nameTH: "กิจกรรมเตรียมความพร้อม",
        credits: "1", prerequisite: "-",
        description: "กิจกรรมเสริมทักษะสำหรับนักศึกษาใหม่"
    },
    "DIGI CITIZEN": {
        code: "90641007",
        nameTH: "พลเมืองดิจิทัล",
        credits: "3", prerequisite: "-",
        description: "การรู้เท่าทันสื่อและทักษะในยุคดิจิทัล"
    },


    "CALCULUS 2": {
        code: "01006031",
        nameTH: "แคลคูลัส 2",
        credits: "3",
        prerequisite: "CALCULUS 1",
        description: "แคลคูลัสขั้นสูงและสมการเชิงอนุพันธ์เบื้องต้น"
    },
    "GEN PHYS 2": {
        code: "01006022",
        nameTH: "ฟิสิกส์ทั่วไป 2",
        credits: "3", prerequisite: "GEN PHYS 1",
        description: "แม่เหล็กไฟฟ้าและฟิสิกส์ยุคใหม่"
    },
    "GEN PHYS LAB 2": {
        code: "01006023",
        nameTH: "ปฏิบัติการฟิสิกส์ทั่วไป 2",
        credits: "1", prerequisite: "GEN PHYS LAB 1",
        description: "การทดลองที่เกี่ยวข้องกับฟิสิกส์ทั่วไป 2"
    },
    "DISCR MATH": {
        code: "01236251",
        nameTH: "คณิตศาสตร์เต็มหน่วย",
        credits: "3", prerequisite: "-",
        description: "ตรรกศาสตร์ เซต กราฟ และทฤษฎีการคำนวณ"
    },
    "OOP": {
        code: "01236613",
        nameTH: "การเขียนโปรแกรมเชิงวัตถุ",
        credits: "3", prerequisite: "COM PROG",
        description: "หลักการเขียนโปรแกรมแบบ Object-Oriented"
    },
    "PROB STAT": {
        code: "01236601",
        nameTH: "ความน่าจะเป็นและสถิติ",
        credits: "3", prerequisite: "-",
        description: "สถิติวิศวกรรมและการวิเคราะห์ข้อมูล"
    },
    "INTERACT DE": {
        code: "01236619",
        nameTH: "การออกแบบปฏิสัมพันธ์",
        credits: "3",
        prerequisite: "-",
        description: "หลักการออกแบบ UI/UX"
    },
    "APP SOFT BUSI": {
        code: "90642118",
        nameTH: "ซอฟต์แวร์ประยุกต์สำหรับธุรกิจ",
        credits: "2",
        prerequisite: "-",
        description: "การใช้โปรแกรมประยุกต์ทางธุรกิจ"
    },
    "TEAM PROJ 1": {
        code: "90641004",
        nameTH: "โครงงานทีม 1",
        credits: "1", prerequisite: "-",
        description: "การทำงานโครงงานร่วมกันเป็นทีม"
    },

    "DE & LINEAR AL": {
        code: "01236600",
        nameTH: "สมการเชิงอนุพันธ์และพีชคณิตเชิงเส้น",
        credits: "3",
        prerequisite: "CALCULUS 2",
        description: "คณิตศาสตร์วิศวกรรม"
    },
    "PRINC COM": {
        code: "01236615",
        nameTH: "หลักการสื่อสาร",
        credits: "3", prerequisite: "-",
        description: "พื้นฐานระบบสื่อสารโทรคมนาคม"
    },
    "DIGITAL SYS": {
        code: "01236603",
        nameTH: "ระบบดิจิทัล",
        credits: "3",
        prerequisite: "-",
        description: "วงจรลอจิกและระบบดิจิทัล"
    },
    "DIGITAL LAB": {
        code: "01236609",
        nameTH: "ปฏิบัติการระบบดิจิทัล",
        credits: "1", prerequisite: "-",
        description: "การทดลองต่อวงจรดิจิทัล"
    },
    "DATA STRUCT": {
        code: "01236614",
        nameTH: "โครงสร้างข้อมูล",
        credits: "3",
        prerequisite: "OOP",
        description: "อัลกอริทึมและการจัดการโครงสร้างข้อมูล"
    },
    "SYS ANA DE": {
        code: "01236626",
        nameTH: "การวิเคราะห์และออกแบบระบบ",
        credits: "3",
        prerequisite: "-",
        description: "วงจรการพัฒนาระบบ (SDLC)"
    },
    "ENG INTER 1": {
        code: "90641009",
        nameTH: "ภาษาอังกฤษระดับกลาง 1",
        credits: "3",
        prerequisite: "-",
        description: "การสื่อสารภาษาอังกฤษ"
    },

    "CLOUD LAB 1": {
        code: "01236256",
        nameTH: "ปฏิบัติการคลาวด์คอมพิวติง 1",
        credits: "1",
        prerequisite: "-",
        description: "การใช้งานระบบคลาวด์"
    },
    "DATA COM": {
        code: "01236616",
        nameTH: "การสื่อสารข้อมูล",
        credits: "3",
        prerequisite: "-",
        description: "ระบบเครือข่ายคอมพิวเตอร์และโปรโตคอล"
    },
    "MOB APP DEV": {
        code: "01236618",
        nameTH: "การพัฒนาแอปพลิเคชันบนมือถือ",
        credits: "3",
        prerequisite: "-",
        description: "การเขียนแอปพลิเคชันสมาร์ทโฟน"
    },
    "COM ORG OS": {
        code: "01236627",
        nameTH: "สถาปัตยกรรมคอมพิวเตอร์และระบบปฏิบัติการ",
        credits: "3",
        prerequisite: "-",
        description: "การทำงานของคอมพิวเตอร์และ OS"
    },
    "DATABASE": {
        code: "01236630",
        nameTH: "ระบบฐานข้อมูล",
        credits: "3",
        prerequisite: "-",
        description: "การออกแบบและจัดการ Database (SQL)"
    },
    "SEN CYB PHYS": {
        code: "01236617",
        nameTH: "เซนเซอร์และระบบไซเบอร์กายภาพ",
        credits: "3",
        prerequisite: "-",
        description: "การเชื่อมต่อเซนเซอร์กับระบบกายภาพ"
    },
    "CLOUD LAB 2": {
        code: "01236628",
        nameTH: "ปฏิบัติการคลาวด์คอมพิวติง 2",
        credits: "1",
        prerequisite: "CLOUD LAB 1",
        description: "ปฏิบัติการขั้นสูงเกี่ยวกับ Cloud"
    },
    "TEAM PROJ 2": {
        code: "90641005",
        nameTH: "โครงงานทีม 2",
        credits: "1",
        prerequisite: "TEAM PROJ 1",
        description: "การพัฒนาโครงงานกลุ่มต่อเนื่อง"
    },
    "ENG INTER 2": {
        code: "90641010",
        nameTH: "ภาษาอังกฤษระดับกลาง 2",
        credits: "3",
        prerequisite: "ENG INTER 1",
        description: "ภาษาอังกฤษเชิงวิชาการ"
    },


    "WIRELESS IOT": {
        code: "01236629",
        nameTH: "เครือข่ายไร้สายสำหรับ IoT",
        credits: "3", prerequisite: "-",
        description: "เทคโนโลยีไร้สายในระบบ IoT"
    },
    "CYB SECU": {
        code: "01236622",
        nameTH: "ความมั่นคงปลอดภัยทางไซเบอร์",
        credits: "3",
        prerequisite: "-",
        description: "ความปลอดภัยของเครือข่ายและข้อมูล"
    },
    "AIOT": {
        code: "01236621",
        nameTH: "ปัญญาประดิษฐ์สำหรับ IoT",
        credits: "3", prerequisite: "-",
        description: "การประยุกต์ใช้ AI ในอุปกรณ์ IoT"
    },
    "SEMINAR": {
        code: "01236625",
        nameTH: "สัมมนา",
        credits: "0",
        prerequisite: "-",
        description: "การสัมมนาเทคโนโลยีใหม่ๆ"
    },
    "IOT LAB 1": {
        code: "01236623",
        nameTH: "ปฏิบัติการ IoT 1",
        credits: "1",
        prerequisite: "-",
        description: "การทดลองสร้างระบบ IoT"
    },
    "MICRO EMBED": {
        code: "01236612",
        nameTH: "ไมโครคอนโทรลเลอร์และระบบสมองกลฝังตัว",
        credits: "3",
        prerequisite: "-",
        description: "การออกแบบระบบสมองกลฝังตัว"
    },
    "GEN-ED LANG": {
        code: "90644xxx",
        nameTH: "หมวดวิชาศึกษาทั่วไป (ภาษา)",
        redits: "3",
        prerequisite: "-",
        description: "วิชาเลือกภาษาต่างประเทศ"
    },


    "PLC IOT": {
        code: "01236620",
        nameTH: "PLC และ IoT ในอุตสาหกรรม",
        credits: "3",
        prerequisite: "-",
        description: "ระบบควบคุมอัตโนมัติอุตสาหกรรม"
    },
    "MAJ ELECTIVE 1": {
        code: "0123xxxx",
        nameTH: "วิชาเลือกเอก",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกเฉพาะทาง"
    },
    "MAJ ELECTIVE 2": {
        code: "0123xxxx",
        nameTH: "วิชาเลือกเอก",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกเฉพาะทาง"
    },
    "IOT LAB 2": {
        code: "01236627",
        nameTH: "ปฏิบัติการ IoT 2",
        credits: "1",
        prerequisite: "IOT LAB 1",
        description: "ปฏิบัติการระบบ IoT ขั้นสูง"
    },
    "GEN-ED 1": {
        code: "90xxxxxx",
        nameTH: "วิชาศึกษาทั่วไป 1",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกศึกษาทั่วไป"
    },
    "GEN-ED 2": {
        code: "90xxxxxx",
        nameTH: "วิชาศึกษาทั่วไป 2",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกศึกษาทั่วไป"
    },


    "TEAM PROJ 3": {
        code: "90641006",
        nameTH: "โครงงานทีม 3",
        credits: "1",
        prerequisite: "TEAM PROJ 2",
        description: "โครงงานทีมก่อนออกสหกิจ/โปรเจค"
    },
    "IND TRAINING": {
        code: "01006004",
        nameTH: "การฝึกงานอุตสาหกรรม",
        credits: "0",
        prerequisite: "-",
        description: "ฝึกประสบการณ์วิชาชีพ"
    },
    "PROJECT 1": {
        code: "01236606",
        nameTH: "โครงงานวิศวกรรม 1",
        credits: "3",
        prerequisite: "-",
        description: "การทำข้อเสนอโครงงาน"
    },
    "ELECTIVE 1": {
        code: "0123xxxx",
        nameTH: "วิชาเลือก",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกสาขา"
    },
    "ELECTIVE 2": {
        code: "0123xxxx",
        nameTH: "วิชาเลือก",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกสาขา"
    },
    "FREE ELEC 1": {
        code: "xxxxxxxx",
        nameTH: "วิชาเลือกเสรี 1",
        credits: "3",
        prerequisite: "-",
        description: "เลือกเรียนวิชาใดก็ได้"
    },
    "PROJECT 2": {
        code: "01236607",
        nameTH: "โครงงานวิศวกรรม 2",
        credits: "3",
        prerequisite: "PROJECT 1",
        description: "การดำเนินการและนำเสนอโครงงาน"
    },
    "ELECTIVE 3": {
        code: "0123xxxx",
        nameTH: "วิชาเลือก",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกสาขา"
    },
    "CAPSTONE P1": {
        code: "01236608",
        nameTH: "โครงงานบูรณาการ (Capstone)",
        credits: "1",
        prerequisite: "-",
        description: "การประยุกต์องค์ความรู้เพื่อแก้ปัญหาจริง"
    },
    "FREE ELEC 2": {
        code: "xxxxxxxx",
        nameTH: "วิชาเลือกเสรี 2",
        credits: "3",
        prerequisite: "-",
        description: "เลือกเรียนวิชาใดก็ได้"
    },
    "CO-OP": {
        code: "01006029",
        nameTH: "สหกิจศึกษา",
        credits: "6",
        prerequisite: "-",
        description: "การปฏิบัติงานในสถานประกอบการ"
    },


    "STDY ABRD": {
        code: "01006302",
        nameTH: "การศึกษาต่างประเทศ",
        credits: "6",
        prerequisite: "-",
        description: "โครงการแลกเปลี่ยน"
    },
    "OVRSEA TRNG": {
        code: "01006005",
        nameTH: "ฝึกงานต่างประเทศ",
        credits: "6",
        prerequisite: "-",
        description: "การปฏิบัติงานต่างประเทศ"
    },
    "ELECTIVE 4": {
        code: "0123xxxx",
        nameTH: "วิชาเลือก",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกสาขา"
    },
    "ELECTIVE 5": {
        code: "0123xxxx",
        nameTH: "วิชาเลือก",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกสาขา"
    },
    "ELECTIVE 6": {
        code: "0123xxxx",
        nameTH: "วิชาเลือก",
        credits: "3",
        prerequisite: "-",
        description: "วิชาเลือกสาขา"
    },
    "CAPSTONE P2": {
        code: "01236608",
        nameTH: "โครงงานบูรณาการ (Capstone)",
        credits: "1",
        prerequisite: "-",
        escription: "การประยุกต์องค์ความรู้เพื่อแก้ปัญหาจริง"
    }
};

// =========================================================
// 3. รวมวิชาทั้ง 2 หลักสูตรเข้าด้วยกันให้เป็นก้อนเดียวโดยอัตโนมัติ
Object.assign(courseData, courseDataIoT);

// =========================================================
// 4. ฟังก์ชันดึงและแสดงข้อมูลวิชาบนหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    // ดึงค่าได้ทั้งแบบแนบไปกับ URL (?name=...) หรือใช้ sessionStorage
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('name') || sessionStorage.getItem('selectedSubject');

    const displayArea = document.getElementById('displayArea');

    if (courseId && courseData[courseId]) {
        const data = courseData[courseId];

        displayArea.innerHTML = `
            <h1 class="course-title" style="color: #ffffff; text-shadow: 0 0 10px #b829ff; margin-top: 0; border-bottom: 2px solid #333; padding-bottom: 15px; font-size: 1.8em;">
                ${courseId} <br><span style="font-size: 0.6em; color: #777;">(${data.code} ${data.nameTH})</span>
            </h1>
            
            <div class="info-group" style="margin-top: 20px;">
                <span class="label" style="font-weight: bold; color: #b829ff;">🎯 หน่วยกิต :</span>
                ${data.credits}
            </div>

            <div class="info-group" style="margin-top: 15px;">
                <span class="label" style="font-weight: bold; color: #b829ff;">⚠️ วิชาบังคับก่อน (Prerequisite):</span>
                ${data.prerequisite}
            </div>

            <div class="info-group" style="margin-top: 15px;">
                <span class="label" style="font-weight: bold; color: #b829ff;">📖 คำอธิบายรายวิชา (Course Description):</span>
                <div class="content" style="margin-top: 10px; line-height: 1.6;">
                    ${data.description}
                </div>
            </div>
        `;
    } else {
        // กรณีที่ไม่พบข้อมูล
        displayArea.innerHTML = `
            <h1 style="color: #ff4d4d; text-align: center;">❌ ไม่พบข้อมูลรายวิชานี้</h1>
            <p style="text-align: center; color: #aaaaaa;">กรุณาตรวจสอบชื่อวิชาในโค้ด ว่าตรงกับข้อมูลที่มีหรือไม่ (พิมพ์เล็ก-ใหญ่ ต้องตรงกัน)</p>
        `;
    }
});